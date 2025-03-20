// Calculate timestamps for the last 24 hours
const endTime = new Date().toISOString();
const startTime = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

export async function getWorkersAnalytics() {
  try {
    const response = await fetch(
      "https://api.cloudflare.com/client/v4/graphql",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
          query GetWorkersAnalytics($accountTag: string, $datetimeStart: string, $datetimeEnd: string, $scriptName: string) {
            viewer {
              accounts(filter: {accountTag: $accountTag}) {
                workersInvocationsAdaptive(limit: 1000, filter: {
                  scriptName: $scriptName,
                  datetime_geq: $datetimeStart,
                  datetime_leq: $datetimeEnd
                }) {
                  sum {
                    subrequests
                    requests
                    errors
                  }
                  quantiles {
                    cpuTimeP50
                    cpuTimeP99
                  }
                  dimensions {
                    datetime
                    scriptName
                    status
                  }
                }
              }
            }
          }
        `,
          variables: {
            accountTag: process.env.CLOUDFLARE_ACCOUNT_TAG,
            datetimeStart: startTime,
            datetimeEnd: endTime,
            scriptName: process.env.SCRIPT_NAME,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Extract and display total number of requests
    const totalRequests =
      data?.data?.viewer?.accounts?.[0]?.workersInvocationsAdaptive?.[0].sum
        ?.requests || 0;
    return totalRequests;
  } catch (error) {
    console.error("Error fetching Workers analytics:");
    console.error(error);
  }
}
