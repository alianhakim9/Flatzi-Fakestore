"use client";

import { useEffect } from "react";

export function Midtrans({ tsToken }) {
  useEffect(() => {
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    const myMidtransClientKey = "SB-Mid-client-n7RwpahHrUQnfD3z";
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);

    const checkSnapAvailability = () => {
      // @ts-ignore
      if (window.snap && tsToken) {
        // @ts-ignore
        window.snap.embed(tsToken, {
          embedId: "snap-container",
        });
      } else {
        // Retry after a short delay
        setTimeout(checkSnapAvailability, 100);
      }
    };

    checkSnapAvailability();

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, [tsToken]);

  return (
    <div className="flex flex-col">
      <h3 className="text-1xl md:text-2xl font-semibold">
        Select payment method
      </h3>
      <p className="text-sm font-light">
        <i>Please until the payment option appear</i>
      </p>
      <div
        id="snap-container"
        className="w-full mt-4 rounded-xl shadow-sm"
      ></div>
    </div>
  );
}
