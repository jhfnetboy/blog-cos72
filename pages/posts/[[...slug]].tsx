import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/utils/Footer";
import { ContentContainer, Page } from "@/components/utils/Layout";
import { NavBar } from "@/components/utils/NavBar";
import { PostList } from "@/components/utils/PostList";
import { SEO } from "@/components/utils/SEO";
import { PostCountPerPagination } from "@/consts/consts";
import { Config } from "@/data/config";
import { sortedPosts } from "@/lib/post-process";
import { isEmptyArray, paginateArray } from "@/lib/utils";
import type { TPostListItem } from "@/types/post-list";
import { nanoid } from "nanoid";
import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type ChangeEvent, type KeyboardEvent, useEffect, useState } from "react";
import { LuPenTool } from "react-icons/lu";

type PostsPageProps = {
  pageAmount: number;
  pageNumber: number;
  postList: TPostListItem[];
  tagList: { name: string; count: number }[];
};

export default function PostsPage(props: PostsPageProps) {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState<string>(props.pageNumber.toString());

  const handleEnterKeyJump = (event: KeyboardEvent<HTMLInputElement>) => {
    setPageNumber(pageNumber.replace(/[^\d]/g, ""));
    if (Number.parseInt(pageNumber) > 0 && Number.parseInt(pageNumber) < props.pageAmount + 1) {
      (event.key === "Go" || event.key === "Enter") && router.push(`/posts/${pageNumber}`);
      return;
    }
  };

  const handleInputPageNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setPageNumber(event.target.value);
  };

  useEffect(() => {
    setPageNumber(props.pageNumber.toString().replace(/[^\d]/g, ""));
  }, [props.pageNumber]);

  return (
    <Page>
      <SEO
        coverURL={Config.PageCovers.websiteCoverURL}
        description={"Here is the list page for all published posts. Click here for more details."}
        title={`${Config.SiteTitle} - All published posts`}
      />
      <NavBar />
      <ContentContainer>
        <h2 className={"caption-font my-5 flex justify-center font-bold text-2xl"}>
          <LuPenTool className="mx-2 my-auto" />
          {"ALL POSTS"}
        </h2>
        {!isEmptyArray(props.tagList) && (
          <Accordion collapsible type="single">
            <AccordionItem className="border-t" value="item-1">
              <AccordionTrigger className="font-bold hover:no-underline">{"TAG FILTER"}</AccordionTrigger>
              <AccordionContent>
                <Separator />
                <div className={"my-5 flex flex-wrap justify-center text-wrap px-2 text-sm"}>
                  {props.tagList.map((item) => (
                    <Link
                      className="m-1 my-auto p-1 font-bold text-gray-700 underline decoration-2 underline-offset-[5px] hover:text-black dark:text-gray-300 dark:hover:text-white"
                      href={`/tags/${item.name}`}
                      key={`tags-${nanoid()}`}
                    >
                      {`${item.name} (${item.count})`}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
        <Separator />
        <PostList data={props.postList} />
        <Separator />
        <div className="my-5 flex justify-between font-bold text-base">
          {props.pageNumber !== 1 && (
            <Button asChild>
              <Link className="font-bold" href={`/posts/${props.pageNumber - 1}/`}>
                {"< PREV"}
              </Link>
            </Button>
          )}
          <div className="my-auto flex justify-center font-bold">
            <Input
              className="mx-2 my-auto h-6 w-11"
              onChange={handleInputPageNumber}
              onKeyDown={handleEnterKeyJump}
              title="Type the specified page number and press Enter to jump."
              value={pageNumber}
            />
            <div className="my-auto">{`  /  ${props.pageAmount}`}</div>
          </div>
          {props.pageNumber !== props.pageAmount && (
            <Button asChild>
              <Link className="font-bold" href={`/posts/${props.pageNumber + 1}/`}>
                {"NEXT >"}
              </Link>
            </Button>
          )}
        </div>
      </ContentContainer>
      <Footer />
    </Page>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const allPaths: { params: { slug?: string[] } }[] = [{ params: { slug: [] } }];

  const pageAmount = Math.ceil(sortedPosts.allPostList.length / PostCountPerPagination);

  for (let i = 0; i < pageAmount; i++) {
    allPaths.push({ params: { slug: [(i + 1).toString()] } });
  }

  return { paths: allPaths, fallback: false };
};

export const getStaticProps: GetStaticProps<PostsPageProps> = async (context) => {
  const params = (context.params?.slug as string[]) ?? [];

  const pageNumber = params[0] ? Number.parseInt(params[0]) : 1;

  const postList: TPostListItem[] = paginateArray(sortedPosts.allPostList, PostCountPerPagination, pageNumber);

  const pageAmount = Math.ceil(sortedPosts.allPostList.length / PostCountPerPagination);

  const tagList: {
    name: string;
    count: number;
  }[] = Object.keys(sortedPosts.postsByTag)
    .map((tagName) => ({
      name: tagName,
      count: sortedPosts.postsByTag[tagName].length,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return {
    props: {
      pageAmount: pageAmount,
      pageNumber: pageNumber,
      postList: postList,
      tagList: tagList,
    },
  };
};
