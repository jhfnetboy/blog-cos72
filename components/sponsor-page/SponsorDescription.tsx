import { Config } from "@/data/config";

export const SponsorDescription = () => {
  return (
    <div className="h-full">
      {!Config.Sponsor ? (
        <p className={"break-words text-lg content-font"}>
          {"Thank you, for data and personal private security, every sponsor method was paused."}
        </p>
      ) : (
        <p className={"break-words text-lg content-font"}>
          {
            "If you like our works, we would deeply appreciate your support as a patron. Your contribution not only fuels our creative journey but also allows me to delve deeper into our passion."
          }
          <br />
          {
            "Cost72 is a Open Source Community Accelerator tool."
          }
          <br />
          {"We provide Decentralization based on Web2 UX. More features and thinking, check our Blog"}
          <br />
          <br />
          {`Yours, ${Config.AuthorName}`}
        </p>
      )}
    </div>
  );
};
