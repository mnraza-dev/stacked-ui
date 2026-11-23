import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  Badge,
} from "stackedui";

export default function TableDocPage() {
  const invoices = [
    { id: "INV-001", status: "Paid", method: "Credit Card", amount: "$250.00" },
    { id: "INV-002", status: "Pending", method: "PayPal", amount: "$150.00" },
    { id: "INV-003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
    { id: "INV-004", status: "Paid", method: "Credit Card", amount: "$450.00" },
  ];

  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Badge variant="outline" size="sm" className="mb-2">Components</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">Table</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Structured, responsive tabular display for datasets, invoices, and analytics logs.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <Table>
          <TableCaption>A list of your recent payment invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((inv) => (
              <TableRow key={inv.id}>
                <TableCell className="font-medium">{inv.id}</TableCell>
                <TableCell>
                  <Badge variant={inv.status === "Paid" ? "success" : inv.status === "Pending" ? "warning" : "destructive"}>
                    {inv.status}
                  </Badge>
                </TableCell>
                <TableCell>{inv.method}</TableCell>
                <TableCell className="text-right font-mono">{inv.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-xl border border-border bg-muted p-4 font-mono text-sm">
          <code>npx stackedui-cli add table</code>
        </div>
      </section>
    </div>
  );
}
