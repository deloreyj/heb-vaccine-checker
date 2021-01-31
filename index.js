const fetch = require("node-fetch");
const texasRandalls = [
  "Randalls 3145",
  "Randalls 1896",
  "Randalls 2481",
  "Randalls 2475",
  "Randalls 1779",
  "Randalls 2482",
  "Randalls 2636",
  "Randalls 2484",
  "Randalls 2490",
  "Randalls 2987",
];

const checkRandalls = async () => {
  const promises = texasRandalls.map((store) =>
    fetch(
      "https://kordinator.mhealthcoach.net/loadEventSlotDaysForCoach.do?_r=9055952347818439&csrfKey=DMKFcrRW0vw-QLuYnUQw",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9,es;q=0.8",
          "cache-control": "no-cache",
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8;",
          pragma: "no-cache",
          "sec-ch-ua":
            '"Google Chrome";v="87", " Not;A Brand";v="99", "Chromium";v="87"',
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          cookie:
            "_gid=GA1.3.1563832942.1612028141; _ga=GA1.3.II0ynmRV1omFIP5gOUX-j-KMeKCWAp-LRVlRLLATRhgvdAzyMz22wxzgpAgGOvxgE8kpGwBvcHhGsBQEBVhOIfHmv7tWg-e1VLp4eyC_VGHna5iSm_upyfhf9LRGNyJj995gljFXyHt6kJEI6XiW_KbZ7jh3cql3dpcgLZVEfEoUuiD1t7TXqWHUYfrAd-h6G3fFxDpRH49xc4mp_WDEVTDk99rONRfGJ-pvh4MZ0is5UCCkpZrlo6I9J6NzaMuh; JSESSIONID=A2BB4A0B1134508ADB69459E26D75282; AWSALB=mfSNRKVWzLuIwGGtfS6bXWJlC9O2a7L+9HfISrKGhZ97DxOvlC1bxh1rQQ2eVtcugM82fUm1ndRU4vqqfvRIV+noHiJy9zHEpPJ1hBW3MzeK+z5FiGmSjf8Nc6pw; AWSALBCORS=mfSNRKVWzLuIwGGtfS6bXWJlC9O2a7L+9HfISrKGhZ97DxOvlC1bxh1rQQ2eVtcugM82fUm1ndRU4vqqfvRIV+noHiJy9zHEpPJ1hBW3MzeK+z5FiGmSjf8Nc6pw",
        },
        referrer: "https://kordinator.mhealthcoach.net/vt-kit-v2/index.html",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: `slotsYear=2021&slotsMonth=1&forceAllAgents=&manualOptionAgents=&companyName=${store}&eventType=COVID+Vaccine+Dose+1+Appt&eventTitle=&location=Randalls+-+5145+N+Fm+620+Rd+Suite+A%2C+Austin%2C+TX%2C+78732&locationTimezone=America%2FChicago&csrfKey=DMKFcrRW0vw-QLuYnUQw`,
        method: "POST",
        mode: "cors",
      }
    )
  );

  const results = await Promise.allSettled(promises);

  results.map(async (res) => {
    let result;
    try {
      result = await res.value.json();
    } catch (e) {
      console.log(e);
    }
    console.log(result);
  });
};

checkRandalls();
