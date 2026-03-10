export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">StackDuel</h1>
        <p className="mt-4">Compare your favorite software stacks.</p>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Popular Comparisons</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/compare/seranking-vs-semrush" className="text-blue-600 hover:underline">
                SE Ranking vs SEMrush
              </a>
            </li>
            <li>
              <a href="/compare/hubspot-vs-salesforce" className="text-blue-600 hover:underline">
                HubSpot vs Salesforce
              </a>
            </li>
            <li>
              <a href="/compare/mailchimp-vs-activecampaign" className="text-blue-600 hover:underline">
                Mailchimp vs ActiveCampaign
              </a>
            </li>
            <li>
              <a href="/compare/quickbooks-vs-freshbooks" className="text-blue-600 hover:underline">
                QuickBooks vs FreshBooks
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
