"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { createItem } from "@/actions/item";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  amount: z.coerce.number().min(1),
  name: z.string().min(1).max(255),
});

type FormData = z.infer<typeof formSchema>;

export default function ItemForm() {
  const { toast } = useToast();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await createItem(data);

    toast({
      title: "投稿しました",
      description: "アイテム一覧をご確認ください",
    });

    form.reset();
  };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
      name: "",
    },
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, () => {
          alert("error");
        })}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>商品名</FormLabel>
              <FormControl>
                <Input placeholder="コッペパン" {...field} />
              </FormControl>
              <FormDescription>最大255文字まで</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>値段</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>0以上の数値を入力</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">商品を追加</Button>
      </form>
    </Form>
  );
}
