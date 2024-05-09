# Waterfall #

Waterfall is a great way of making sure that a certain condition is satisfied before starting on a new request.


Below is some code which does that:
```
const revenue = await fetchRevenue();
const latestInvoices = await fetchLatestInvoices(); // wait for fetchRevenue() to finish
const {
  numberOfInvoices,
  numberOfCustomers,
  totalPaidInvoices,
  totalPendingInvoices,
} = await fetchCardData(); // wait for fetchLatestInvoices() to finish
```


However sometimes this is not the expected behaviour we want and can impact performance and hence we can use `Parallel data fetching`

# Parallel data fetching #

Using Promise.all() or Promise.allSettled()
This allows all functions to initiate at the same time

```
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;
 
    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);
```

However one problem with this is that if you have one function which is very slow then it will wait
until that one is resolved and in a dynamically rendered page the whole page will be blocked waiting for that
function to be settled.
`your application is only as fast as your slowest data fetch.`

Solution to this? `Streaming`