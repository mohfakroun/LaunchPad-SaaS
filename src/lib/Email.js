
//ENSURE YOU HAVE CREATED AN ACCOUNT WITH FORMSPREE AND HAVE YOUR ENDPOINT READY TO GO. else this wouldnt work :(
//OR you can implment your own post logic using your desired email provider such as mailchimp, sendgrid etc
export async function submitEmail(email) {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  if (!endpoint) {
    throw new Error("missing Formspree endpoint..ensure you have set your endpoint in the .env file");
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    throw new Error("form submission has failed, try again.");
  }
  return true;
}
