import type { NextApiRequest, NextApiResponse } from "next";
import ogs from "open-graph-scraper";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const parseData = JSON.parse(req.body);
  const url = parseData.url;
  const options = { url: url, onlyGetOpenGraphInfo: true };
  ogs(options, function (error, results, response) {
    if (error) {
      res.json(error);
      console.log("error", error);
    } else {
      return res.send({ data: results });
    }
  });
}
