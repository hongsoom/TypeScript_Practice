{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState_(state: ResourceLoadState) {
    switch (state.state) {
      case 'loading':
        return console.log(`👀 ${state}...`)
      case 'success':
        return console.log(`😃 ${state.response.body}`)
      case 'fail':
        return console.log(`😱 ${state.reason}`)
      default:
        throw new Error(`unknown direction: ${state}`)
    }
  }

  printLoginState_({ state: 'loading' }); // 👀 loading...
  printLoginState_({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState_({ state: 'fail', reason: 'no network' }); // 😱 no network
}
