import Head from 'next/head'
import ContractStatus from '@/src/components/ContractStatus';
import ContractTable from '@/src/components/ContractTable';
import CycleTime from '@/src/components/CycleTime';
import "@appwrite.io/pink";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contract Dashboard</title>
      </Head>
      <div class="box u-margin-32 u-padding-block-12">
        <h1 class="heading-level-1 u-text-center">Testing Contract Dashboard</h1>
        <ContractStatus />
        <CycleTime/>
        <ContractTable/>
      </div>
    </>
  )
}