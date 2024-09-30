import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/utils/Footer";
import { ContentContainer, Page } from "@/components/utils/Layout";
import { NavBar } from "@/components/utils/NavBar";
import { SEO } from "@/components/utils/SEO";
import { SocialIcons } from "@/components/utils/SocialIcons";
import { Config } from "@/data/config";

import Link from "next/link";

export default function AboutPage() {
  return (
    <Page>
      <SEO
        coverURL={Config.PageCovers.websiteCoverURL}
        description={"Type your brief self-introduction in a sentence here make SEO recognize it easily."}
        title={`About Us - ${Config.AuthorName}`}
      />
      <NavBar />
      <ContentContainer>
        <h2 className={"caption-font my-5 flex justify-around font-bold text-2xl"}>{"ABOUT COS72"}</h2>
        <Separator />
        <div className={"my-5 justify-center content-font md:flex md:space-x-10"}>
          <div className="my-auto flex md:w-1/3">
            <img alt="my-profile" className="mx-auto my-auto max-h-[23rem] rounded-lg" src="/images/profile.png" />
          </div>
          <div className="my-auto md:w-1/3">
            <div className="mt-5 mb-3 font-bold text-3xl">Hi, there👋</div>Cos72 is a Open Source DAO/Community Tool to resolve
            the THREE KEY QUESTIONS OF DAO (Onboarding, Incentivation and Circle)  with Ethereum AA and OP Stack solutions (Email+Passkey Account, Gas Sponsor and more).
            <br />
            <br />
            More features and how to use follow this:
            <br />
            Basic Demo,<a href="https://cos72.netlify.app/" target="_blank">You can try it now.</a>
            <br />
            Cos72, <a href="https://www.notion.so/planckerdao/Cos72-d313dc62acaa4031a1e9f50adbb5bb28" target="_blank">Introduction</a>
          </div>
        </div>
        <Separator />
        <SocialIcons />
        <Separator />

        <ul className="mx-auto my-10 list-disc px-5 md:w-2/3">
          {Config.SocialLinks.github && (
            <li className="my-2">
              {"📕 Check out my github profile at "}
              <Link className="underline" href={`https://github.com/${Config.SocialLinks.github}`} target="_blank">
                Github
              </Link>
            </li>
          )}
          <li className="my-2">🖥️ Cos72 devote itself to helping Communities be Sustainable</li>
          <li className="my-2">🤝 It is a different mode with the Capitalism and Market mechanism.</li>
          {Config.SocialLinks.twitter && (
            <li className="my-2">
              {"📫 How to reach me on Twitter: "}
              <Link className="link" href={`https://twitter.com/${Config.SocialLinks.twitter}`} target="_blank">
                {Config.SocialLinks.twitter}
              </Link>
            </li>
          )}
          <li className="my-2">Build in : Chiang Mai, Thailand</li>
        </ul>

        <div className="mx-auto my-10 font-bold md:w-2/3">
          {"📖 "}Any questions, please feel free to contact us via email at: hi#(replace with @) aastar.io
        </div>
      </ContentContainer>
      <Footer />
    </Page>
  );
}
