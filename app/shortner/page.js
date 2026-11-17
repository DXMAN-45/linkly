
"use client";

import React, { useState } from "react";
import Btn from "../components/Btn";

const Shortner = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  // Generate Short URL
  const generate = async (e) => {
    e.preventDefault();

    setError("");
    setGenerated("");
    setCopied(false);

    if (!url.trim() || !shorturl.trim()) {
      setError("Please enter both your URL and custom alias.");
      return;
    }

    // Validate URL
    try {
      const parsedUrl = new URL(url.trim());

      if (!["http:", "https:"].includes(parsedUrl.protocol)) {
        setError("Please enter a valid HTTP or HTTPS URL.");
        return;
      }
    } catch {
      setError("Please enter a valid URL.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url.trim(),
          shorturl: shorturl.trim(),
        }),
      });

      const result = await response.json();

      if (result.success) {
        const generatedUrl = `${window.location.origin}/${shorturl.trim()}`;

        setGenerated(generatedUrl);
        setUrl("");
        setShorturl("");
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Copy URL
  const CopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generated);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setError("Unable to copy the link. Please copy it manually.");
    }
  };

  return (
    <main className="flex min-h-[84vh] w-full items-center justify-center bg-gray-300 px-4 py-10 sm:px-6">

      <div className="flex w-full max-w-xl flex-col gap-7 rounded-3xl border border-gray-300 bg-gray-200 p-6 shadow-[0_8px_35px_rgba(0,0,0,0.2)] sm:p-10">

        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-800 text-3xl text-white shadow-lg">
            🔗
          </div>

          <div className="flex items-center gap-2">

            <span className="text-sm font-semibold uppercase tracking-widest text-gray-600">
              Linkly URL Shortener
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shorten your URLs
          </h1>

          <p className="max-w-sm text-sm leading-relaxed text-gray-600 sm:text-base">
            Turn long, complicated URLs into short and shareable links.
          </p>

        </div>

        {/* Form */}
        <form onSubmit={generate} className="flex flex-col gap-5">

          {/* Original URL */}
          <div className="flex flex-col gap-2">

            <label
              htmlFor="original-url"
              className="text-sm font-semibold text-gray-800"
            >
              Destination URL
            </label>

            <input
              id="original-url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/your-long-url"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-gray-600 focus:ring-2 focus:ring-gray-400/30 sm:text-base"
            />

          </div>

          {/* Custom Alias */}
          <div className="flex flex-col gap-2">

            <label
              htmlFor="custom-alias"
              className="text-sm font-semibold text-gray-800"
            >
              Custom Alias
            </label>

            <div className="flex min-w-0 items-center overflow-hidden rounded-xl border border-gray-300 bg-white focus-within:border-gray-600 focus-within:ring-2 focus-within:ring-gray-400/30">

              <span className="whitespace-nowrap border-r border-gray-200 bg-gray-100 px-3 py-3 text-xs text-gray-500 sm:text-sm">
                {typeof window !== "undefined"
                  ? window.location.host
                  : "linkly.com"}
                /
              </span>

              <input
                id="custom-alias"
                type="text"
                value={shorturl}
                onChange={(e) => setShorturl(e.target.value)}
                placeholder="my-link"
                required
                className="min-w-0 w-full bg-transparent px-3 py-3 text-sm outline-none sm:text-base"
              />

            </div>

            <p className="text-xs text-gray-500">
              Choose a custom name for your shortened link.
            </p>

          </div>

          {/* Error Message */}
          {error && (
            <p
              role="alert"
              className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
            >
              {error}
            </p>
          )}

          {/* Generate Button */}
          <Btn
            name={loading ? "Generating..." : "Generate Short Link"}
            arrow={!loading}
            len={true}
            type="submit"
            disabled={loading}
          />

        </form>

        {/* Generated URL */}
        {generated && (
          <div className="flex flex-col gap-4 rounded-2xl border border-gray-300 bg-white p-4 sm:p-5">

            <div className="flex items-center gap-2">

              <span className="text-xl font-bold text-green-600">
                ✓
              </span>

              <h2 className="font-semibold text-gray-800">
                Your link is ready!
              </h2>

            </div>

            <div className="flex min-w-0 items-center gap-2">

              <a
                href={generated}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-0 flex-1 break-all text-sm font-medium text-blue-600 underline decoration-blue-300 underline-offset-4 hover:text-blue-800 sm:text-base"
              >
                {generated}
              </a>

              <button
                type="button"
                onClick={CopyToClipboard}
                aria-label="Copy shortened link"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-800 text-xl text-white transition-all hover:bg-gray-700 active:scale-95"
              >
                {copied ? "✓" : "📋"}
              </button>

            </div>

            <p className="text-xs text-gray-500">
              {copied
                ? "Link copied to clipboard!"
                : "Your shortened link is ready to share."}
            </p>

          </div>
        )}

        {/* Footer Note */}
        <p className="text-center text-xs text-gray-500">
          Simple, fast and easy URL management with Linkly.
        </p>

      </div>
    </main>
  );
};

export default Shortner;
