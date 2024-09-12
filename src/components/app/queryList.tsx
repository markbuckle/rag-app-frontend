"use client";

import { QueryModel } from "@/api-client";
import createApiClient from "@/lib/getApiClient";
import { useEffect, useState } from "react";
import QueryListItem from "./queryListItem";
import { getSessionId } from "@/lib/getUserId";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function QueryList() {
  // helper functions to get API Client and unique user ID
  const api = createApiClient();
  const userId = getSessionId();

  // useState hook to store a list of query items that we found for that user
  const [isLoading, setIsLoading] = useState(true);
  const [queryItems, setQueryItems] = useState<QueryModel[]>([]);

  // Generate this list when the page first loads. Create a hook to call the list query endpoint.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = {
          userId: userId,
        };
        const response = api.listQueryEndpointListQueryGet(request);
        response.then((data) => {
          console.log(data);
          setQueryItems(data);
          setIsLoading(false);
        });
        console.log(`Got data: ${response}`);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // check whether or not the query items exist
  let queryElements;
  // if query items do not exist, display a loading skeleton
  if (isLoading) {
    queryElements = (
      <div className="space-y-2">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>
    );
    // if query items exist, display them
  } else {
    queryElements = queryItems.map((queryItem) => {
      return <QueryListItem key={queryItem.queryId} {...queryItem} />;
    });
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Queries</CardTitle>
        <CardDescription>
          Here are queries you've recently submitted.
        </CardDescription>
      </CardHeader>
      <CardContent>{queryElements}</CardContent>
    </Card>
  );
}
