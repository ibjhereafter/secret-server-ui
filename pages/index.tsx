import type { NextPage } from 'next'
import { Fragment } from "react";
import Secrets from "../components/secrets/Secrets";

const Home: NextPage = () => {
  return (
      <Fragment>
          <Secrets />
      </Fragment>
  )
}

export default Home
