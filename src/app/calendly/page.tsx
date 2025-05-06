"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const data = [
  {
    assign: true,
    account: "CAL001",
    user: { initials: "AB", name: "Alice Brown" },
    event: "$",
    lead: "unassigned",
    currency: { pair: "USD-EUR", color: "bg-green-100 text-green-800" },
    last: "$5,000.00",
    minutes: 10,
    manager: "John D...",
    max: "$5,500.00",
    activity: null,
  },
  {
    assign: true,
    account: "CAL002",
    user: { initials: "CD", name: "Chris Doe" },
    event: "$",
    lead: "unassigned",
    currency: { pair: "GBP-USD", color: "bg-yellow-100 text-yellow-800" },
    last: "£3,000.00",
    minutes: 15,
    manager: null,
    max: "£3,200.00",
    activity: null,
  },
  // ...add more rows as needed
];

const columns = [
  "Assign to me",
  "Account Identifier",
  "User",
  "Event type",
  "Lead owner",
  "HQ Currency Pair",
  "Last quote amount",
  "Minutes since last quote",
  "Account Ma...",
  "Max quote amount",
  "Activity",
];

const tabs = [
  { name: "Overview", href: "/" },
  { name: "Opportunities", href: "/opportunities" },
  { name: "Calendly", href: "/calendly", notification: 2 },
];

export default function Calendly() {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      {/* Navigation Tabs */}
      <div className="mb-6">
        <div className="bg-muted text-muted-foreground inline-flex h-12 items-center rounded-lg p-[3px]">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              className={`relative z-0 px-6 py-2 rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${pathname === tab.href ? "bg-background text-foreground shadow" : "hover:text-foreground"}`}
            >
              {tab.name}
              {tab.notification && (
                <span className="absolute -top-1.5 -right-3 bg-red-500 text-white text-[10px] rounded-full px-1 py-0.5 font-bold shadow pointer-events-none z-10 min-w-[16px] h-[16px] flex items-center justify-center">{tab.notification}</span>
              )}
            </Link>
          ))}
        </div>
      </div>
      {/* Page Title */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-3xl font-bold">Calendly</h1>
      </div>
      {/* Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded-md text-sm">
            <thead>
              <tr className="bg-muted">
                {columns.map((col) => (
                  <th key={col} className="px-4 py-2 font-medium text-left whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className={`border-b last:border-b-0 hover:bg-muted/50 ${i < 2 ? 'font-bold bg-blue-50' : ''}`}>
                  <td className="px-4 py-2 flex items-center gap-2">
                    {i < 2 && <span className="inline-block w-2 h-2 bg-blue-500 rounded-full" title="Unread" />}
                    <Button size="sm" variant="default">Assign</Button>
                  </td>
                  <td className="px-4 py-2 font-mono">{row.account}</td>
                  <td className="px-4 py-2 flex items-center gap-2">
                    <Avatar className="w-7 h-7">
                      <AvatarFallback>{row.user.initials}</AvatarFallback>
                    </Avatar>
                    {row.user.name}
                  </td>
                  <td className="px-4 py-2">{row.event}</td>
                  <td className="px-4 py-2 text-blue-700 underline cursor-pointer">{row.lead}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-md text-xs font-semibold ${row.currency.color}`}>{row.currency.pair}</span>
                  </td>
                  <td className="px-4 py-2">{row.last}</td>
                  <td className="px-4 py-2">{row.minutes}</td>
                  <td className="px-4 py-2">
                    {row.manager ? (
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-md text-xs font-semibold">{row.manager}</span>
                    ) : null}
                  </td>
                  <td className="px-4 py-2">{row.max}</td>
                  <td className="px-4 py-2">{row.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-xs text-muted-foreground mt-2">2 results</div>
      </Card>
    </div>
  );
} 