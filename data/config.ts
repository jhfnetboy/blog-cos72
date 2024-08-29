import type { TConfig } from "@/types/config.type";

export const Config: TConfig = {
  // Image url for avatar.
  AvatarURL: "/images/avatar.png",
  // Your favorite motto, or a brief self-introduction, for homepage display
  Sentence:
    "Those who would give up essential Liberty, to purchase a little temporary Safety, deserve neither Liberty nor Safety. Benjamin Franklin 1755",
  // Your nickname, or pen name here.
  Nickname: "Cos72",

  // Website main title.
  SiteTitle: "Cos72 Blog",
  // Your domain for website.
  SiteDomain: "blog.cos72.org",

  // For the cover image displayed on the homepage, the recommended image aspect ratio is 4:1.
  PageCovers: {
    websiteCoverURL: "/images/cover.webp",
  },

  // Your social platform IDs, and email address.
  SocialLinks: {
    twitter: "AAStarCommunity", // Twitter ID
    // instagram: "example", // Instagram ID
    // linkedin: "example", // Linkedin ID
    // github: "AAStarCommunity", // Github ID
    // facebook: "example", // Facebook ID
    // youtube: "example", // Channel ID
    // reddit: "example", // Reddit ID
    // bilibili: "123456", // Bilibili Number ID
    // weibo: "123456", // Weibo UID
    // telegram: "example", // Telegram ID
    // quora: "example", //Quora ID
    // mastodon: "https://mas.to/@example", // Mastodon link
    email: "hi@aastar.io", // Email address, required.
  },

  // Giscus Configure. Please refer to the https://giscus.app for entire instruction
  Giscus: {
    enabled: true,
    repo: "PrinOrange/nextjs-lexical-blog",
    repoId: "R_kgDOK44zmw",
    category: "Announcements",
    categoryId: "DIC_kwDOK44zm84Cb94g",
  },

  // Enable the RSS Feed? If not, the feed file will not be generated and the feed entrance will be closed.
  RSSFeed: {
    enabled: true,
  },

  // The supported sponsor ways are wechat-pay, alipay and paypal.
  Sponsor: {
    // Your WechatPay QRCode content.
    WechatPayQRCodeContent: "wxp://xxxxxxxxxxxxxxxxx",
    // Your Alipay link.
    AlipayLink: "https://qr.alipay.com/xxxx",
    // Your Paypal user Id.
    PaypalId: "xxxx",
    // If it's true, it will show the github sponsor link button.
    Github: true,
    // Your Patreon user Id.
    PatreonId: "xxxx",
    // Write your crypto wallet address here.
    Crypto: [
      {
        Name: "BTC",
        Address: "",
        Blockchain: "Bitcoin",
      },
      {
        Name: "ETH",
        Address: "",
        Blockchain: "Ethereum",
      },
      {
        Name: "USDT",
        Address: "",
        Blockchain: "Ethereum",
      },
    ],
  },

  // Website establishment year.
  YearStart: "2024",
  // Please enter your legal name for use with the copyright mark.
  AuthorName: "AAStar Team",
};
