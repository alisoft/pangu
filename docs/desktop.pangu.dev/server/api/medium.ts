import type { IncomingMessage, ServerResponse } from "http"
import axios from "axios";

export default async (req: IncomingMessage, res: ServerResponse) => {

  try {
    const response = await axios({
      method: "get",
      url: "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@realkimmy",
    })
    return { data: response.data }
  } catch (err) {
    res.statusCode = 400
    return { err }
  }
}
