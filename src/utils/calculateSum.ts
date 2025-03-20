type Invocation = {
  dimensions: {
    datetime: string;
    scriptName: string;
    status: string;
  };
  quantiles: {
    cpuTimeP50: number;
    cpuTimeP99: number;
  };
  sum: {
    errors: number;
    requests: number;
    subrequests: number;
  };
};

export type ApiResponse = {
  data: {
    viewer: {
      accounts: {
        workersInvocationsAdaptive: Invocation[];
      }[];
    };
  };
};

export function calculateTotalRequests(response: ApiResponse): number {
  return response.data.viewer.accounts.reduce((total, account) => {
    return (
      total +
      account.workersInvocationsAdaptive.reduce(
        (sum, invocation) => sum + invocation.sum.requests,
        0
      )
    );
  }, 0);
}
