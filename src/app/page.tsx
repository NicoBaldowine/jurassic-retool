"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon } from "lucide-react";

const tabs = [
  { name: "Overview", href: "/" },
  { name: "Opportunities", href: "/opportunities", notification: 3 },
  { name: "Calendly", href: "/calendly", notification: 2 },
];

export default function Dashboard() {
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
      {/* Dashboard Title & Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center border rounded-md px-3 py-1 text-sm bg-background">
            <CalendarIcon className="w-4 h-4 mr-2" />
            Jan 20, 2023 - Feb 09, 2023
          </div>
          <Button>Download</Button>
        </div>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-xs text-muted-foreground mb-2 flex items-center justify-between">
              Total Revenue <span>$</span>
            </div>
            <div className="text-2xl font-bold">$45,231.89</div>
            <div className="text-xs text-muted-foreground">+20.1% from last month</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-xs text-muted-foreground mb-2 flex items-center justify-between">
              Subscriptions <span>📈</span>
            </div>
            <div className="text-2xl font-bold">+2350</div>
            <div className="text-xs text-muted-foreground">+180.1% from last month</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-xs text-muted-foreground mb-2 flex items-center justify-between">
              Sales <span>🛒</span>
            </div>
            <div className="text-2xl font-bold">+12,234</div>
            <div className="text-xs text-muted-foreground">+19% from last month</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-xs text-muted-foreground mb-2 flex items-center justify-between">
              Active Now <span>📊</span>
            </div>
            <div className="text-2xl font-bold">+573</div>
            <div className="text-xs text-muted-foreground">+201 since last hour</div>
          </CardContent>
        </Card>
      </div>
      {/* Overview & Recent Sales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <div className="font-semibold mb-4">Overview</div>
            {/* Placeholder for chart */}
            <div className="h-56 flex items-end gap-2">
              {[1500, 3200, 2500, 900, 3700, 2200, 4800, 4900, 4500, 4100, 3900, 4000].map((v, i) => (
                <div
                  key={i}
                  className="flex-1 bg-foreground/80 rounded-t-md"
                  style={{ height: `${(v / 6000) * 100}%` }}
                  title={`$${v}`}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>$0</span>
              <span>$1500</span>
              <span>$3000</span>
              <span>$4500</span>
              <span>$6000</span>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="font-semibold mb-4">Recent Sales</div>
            <div className="text-xs text-muted-foreground mb-2">You made 265 sales this month.</div>
            <Separator className="mb-2" />
            <div className="flex flex-col gap-4">
              {[
                { name: "Olivia Martin", email: "olivia.martin@email.com", amount: 1999 },
                { name: "Jackson Lee", email: "jackson.lee@email.com", amount: 39 },
                { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: 299 },
                { name: "William Kim", email: "will@email.com", amount: 99 },
                { name: "Sofia Davis", email: "sofia.davis@email.com", amount: 39 },
              ].map((sale, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>{sale.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">{sale.name}</div>
                      <div className="text-xs text-muted-foreground">{sale.email}</div>
                    </div>
                  </div>
                  <div className="font-medium text-sm">+${sale.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
