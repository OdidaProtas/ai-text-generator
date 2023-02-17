import { openAI } from "$lib/openAi";

export async function load({ url }: any) {
  try {
    const q = await url.searchParams.get("q");
    const completion = await openAI.createCompletion(
      {
        model: "text-davinci-002",
        prompt: q,
        temperature: 0.5,
      },
      {
        timeout: 1000,
      }
    );
    const choices = completion.data.choices.map((choice) => choice.text);
    return {
      choices: [],
    };
  } catch (e) {
    return {
      choices: [],
      error: true,
    };
    console.log(e);
  }
}
