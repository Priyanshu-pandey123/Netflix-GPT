
import OpenAI from 'openai';
import { GPT_APIKEY } from './constant';
 
const openai = new OpenAI({
  apiKey:GPT_APIKEY ,
  dangerouslyAllowBrowser: true
  // defaults to process.env["OPENAI_API_KEY"]
});



export default openai