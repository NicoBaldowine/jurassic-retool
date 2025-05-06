"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RotateCcw, Filter as FilterIcon, Download as DownloadIcon } from "lucide-react";

const data = [
  {
    assign: true,
    account: "XEMT0330739737",
    user: { initials: "SB", name: "Sreekant Badam" },
    event: "$",
    lead: "unassigned",
    currency: { pair: "AUD-INR" },
    last: "A$186,704.00",
    minutes: 22,
    manager: null,
    max: "A$202,023.00",
    activity: null,
  },
  {
    assign: true,
    account: "CYOL0110702805",
    user: { initials: "MF", name: "Ms Felicity..." },
    event: "$",
    lead: "unassigned",
    currency: { pair: "NZD-USD" },
    last: "NZ$130,000.00",
    minutes: 22,
    manager: "Charles G...",
    max: "NZ$130,000.00",
    activity: null,
  },
  {
    assign: true,
    account: "XEMT0440222437",
    user: { initials: "JS", name: "Jadwiga Stolarski" },
    event: "$",
    lead: "sebastianr@riamoneytrans...",
    currency: { pair: "CAD-USD" },
    last: "CA$320,000.00",
    minutes: 22,
    manager: null,
    max: "CA$320,000.00",
    activity: null,
  },
  {
    assign: true,
    account: "XEMT0440988053",
    user: { initials: "WR", name: "William Rocco" },
    event: "$",
    lead: "unassigned",
    currency: { pair: "USD-EUR" },
    last: "$22,621.00",
    minutes: 23,
    manager: null,
    max: "$22,621.00",
    activity: null,
  },
  {
    assign: true,
    account: "XEMT0330696345",
    user: { initials: "AS", name: "Amgad Shorrab" },
    event: "$",
    lead: "unassigned",
    currency: { pair: "CAD-BHD" },
    last: "CA$349,909.00",
    minutes: 28,
    manager: "James Mc...",
    max: "CA$349,909.00",
    activity: null,
  },
  {
    assign: true,
    account: "XEMT0220770643",
    user: { initials: "MM", name: "Mr Mike Dyas" },
    event: "$",
    lead: "unassigned",
    currency: { pair: "GBP-EUR" },
    last: "£38,000.00",
    minutes: 32,
    manager: null,
    max: "£38,000.00",
    activity: null,
  },
  {
    assign: true,
    account: "XEMT0330969024",
    user: { initials: "RD", name: "Rakshith Dasen..." },
    event: "$",
    lead: "unassigned",
    currency: { pair: "USD-INR" },
    last: "$20,001.00",
    minutes: 32,
    manager: null,
    max: "$20,001.00",
    activity: null,
  },
  {
    assign: true,
    account: "XEMT0220338487",
    user: { initials: "MP", name: "Mr Paul Manheim" },
    event: "$",
    lead: "unassigned",
    currency: { pair: "USD-AUD" },
    last: "$100,000.00",
    minutes: 33,
    manager: "Diana Laz...",
    max: "$100,000.00",
    activity: null,
  },
  {
    assign: true,
    account: "XEMT0555555555",
    user: { initials: "AA", name: "Alex Anderson" },
    event: "$",
    lead: "unassigned",
    currency: { pair: "EUR-USD" },
    last: "€50,000.00",
    minutes: 18,
    manager: null,
    max: "€55,000.00",
    activity: null,
  },
  {
    assign: true,
    account: "XEMT0666666666",
    user: { initials: "BB", name: "Betty Brown" },
    event: "$",
    lead: "unassigned",
    currency: { pair: "USD-CAD" },
    last: "$75,000.00",
    minutes: 25,
    manager: null,
    max: "$80,000.00",
    activity: null,
  },
];

const grayTones = [
  "bg-gray-100 text-gray-800",
  "bg-gray-200 text-gray-900",
  "bg-gray-300 text-gray-900",
  "bg-gray-400 text-gray-900",
  "bg-gray-500 text-white",
];

const columns = [
  "Assign to me",
  "Account Identifier",
  "User",
  "Event type...",
  "Lead owner",
  "HQ Currency Pair",
  "Last quote amount",
  "Minutes since last quote...",
  "Account Ma...",
  "Max quote amount",
  "Activity",
];

const tabs = [
  { name: "Overview", href: "/" },
  { name: "Opportunities", href: "/opportunities", notification: 3 },
  { name: "Calendly", href: "/calendly" },
];

export default function Opportunities() {
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
        <h1 className="text-3xl font-bold">Opportunities</h1>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button variant="outline" size="sm" className="h-10 px-5 flex items-center gap-2">
            <FilterIcon className="w-5 h-5" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="h-10 px-5 flex items-center gap-2">
            <DownloadIcon className="w-5 h-5" />
            Download
          </Button>
          <Button variant="outline" size="icon" className="h-10 w-10 flex items-center justify-center" aria-label="Refresh">
            <RotateCcw className="w-5 h-5" />
          </Button>
        </div>
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
                <tr key={i} className={`border-b last:border-b-0 ${i < 3 ? 'font-bold bg-gray-50 hover:bg-gray-100' : 'hover:bg-muted/50'}`}>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-block w-2.5 h-2.5 rounded-full align-middle ${i < 3 ? "bg-blue-500" : "invisible"}`}
                        title={i < 3 ? "Unread" : ""}
                        style={{ minWidth: '10px', minHeight: '10px' }}
                      />
                      <Button size="sm" variant="default">Assign</Button>
                    </div>
                  </td>
                  <td className="px-4 py-2 font-mono">{row.account}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{row.user.name}</td>
                  <td className="px-2 py-2 max-w-[60px] truncate">{row.event}</td>
                  <td className="px-4 py-2 text-blue-700 underline cursor-pointer">{row.lead}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-md text-xs font-semibold ${grayTones[i % grayTones.length]}`}>{row.currency.pair}</span>
                  </td>
                  <td className="px-4 py-2">{row.last}</td>
                  <td className="px-2 py-2 max-w-[80px] truncate">{row.minutes}</td>
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
        <div className="text-xs text-muted-foreground mt-2">545 results</div>
      </Card>
    </div>
  );
} 