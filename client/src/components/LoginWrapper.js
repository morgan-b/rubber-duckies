import React from 'react';

function LoginWrapper(props) {
    return (
        <>
        <section className="container col-xl-10 col-xxl-8 px-4 py-5">
  <section className="row align-items-center g-5 py-5">

    <section className="col-lg-7 text-center text-lg-start">

      <h1 className="display-4 fw-bold lh-1 mb-3">Welcome</h1>
      <p className="col-lg-10 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </section>
    {props.children}
    </section>
</section>
            
        </>
    )
}

export default LoginWrapper
