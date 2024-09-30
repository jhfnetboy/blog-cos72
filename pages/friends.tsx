import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/utils/Footer";
import { ContentContainer, Page } from "@/components/utils/Layout";
import { NavBar } from "@/components/utils/NavBar";
import { SEO } from "@/components/utils/SEO";
import { Config } from "@/data/config";
import { FriendsList } from "@/data/friends";
import { nanoid } from "nanoid";
import Link from "next/link";

export default function FriendsPage() {
  return (
    <Page>
      <SEO description={"My Friend Links"} title={`${Config.SiteTitle} - Friends`} />
      <NavBar />
      <ContentContainer>
        <h2 className={"caption-font my-5 flex justify-center font-bold text-2xl"}>{"FRIENDS"}</h2>
        <Separator />
        <div className={"my-5 flex flex-wrap justify-center text-2xl content-font"}>
          {FriendsList.map((item) => (
            <Link className="mx-2 p-2 underline underline-offset-4" href={item.url} key={nanoid()}>
              {item.title}
            </Link>
          ))}
        </div>
        <Separator />
        <div className="my-2 flex flex-col justify-start text-base">
          <div className="mx-auto">
            {"Welcome to exchange our friend links and every high-quality blog websites are welcomed. "}
            <Link className="underline" href={`mailto:${Config.SocialLinks.email}`}>
              {"Email me please"}
            </Link>
          </div>
        </div>
        <div className="my-2 flex flex-col justify-start text-base">
          <div className="mx-auto">
            <div className="relative w-full h-64 my-4">
              <img
                src="/images/friends-background.jpg"
                alt="Friends background"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-3xl font-bold">Our Community</h3>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="/images/community-rollover.jpg"
                    alt="Community rollover"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-3xl font-bold">Join Us!</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
      <Footer />
    </Page>
  );
}
