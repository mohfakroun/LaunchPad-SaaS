"use client";
import React, { useState } from "react";
import { SiMinutemailer } from "react-icons/si";
import { submitEmail } from "@/lib/Email"; 

export const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("loading..."); 

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      setStatus("loading...");
      await submitEmail(email);
      setStatus("success");
      setEmail("");

      setTimeout(() => setStatus("loading..."), 2500);
    } 
    catch (error) {
      setStatus("failed to submit, try again");
    }
  };

  return (
    <section className="relative bg-zinc-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-center text-3xl font-medium md:text-start">
              Join our mailing list
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg text-zinc-400 md:mx-0 md:text-start">
              Get the latest news, layout drops, and small improvements you can
              clone straight into your next build.
            </p>
          </div>

          <div className="w-full">
            <form
              onSubmit={onSubmit}
              className="mx-auto flex w-full max-w-md items-center gap-2 md:mx-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === "loading"}
                className="w-full rounded-3xl border border-zinc-600 bg-zinc-700 px-3 py-3 text-white transition-all duration-300 placeholder:text-zinc-400 focus:border-white focus:outline-none hover:rounded-md disabled:opacity-60"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                aria-label="Submit email"
                className="grid h-12 w-12 shrink-0 place-content-center rounded-2xl bg-white text-xl text-zinc-900 transition-all duration-300 hover:rounded-md hover:bg-zinc-200 disabled:opacity-60"
              >
                <SiMinutemailer />
              </button>
            </form>
            <p className="mx-auto mt-3 max-w-md text-center text-sm text-zinc-400 md:mx-0 md:text-start">
              {status === "success"

              //if you want to change the success message, you can do that here. 
              //OR you can create a small popup comonent and trigger that on success instead of changing the text.
                ? "You’re in. Keep an eye out for updates!"
                : status === "failed to submit, try again"
                ? "Something went wrong. Try again."
                : "No spam. Unsubscribe anytime."}
            </p>
          </div>
        </div>






        <div className="absolute left-0 right-0 top-0 h-8 rounded-b-2xl bg-zinc-50" />
        <div className="absolute bottom-0 left-0 right-0 h-8 rounded-t-2xl bg-white" />
      </div>
    </section>
  );
};
