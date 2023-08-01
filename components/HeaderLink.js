import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { Fragment } from "react";

export const HeaderLink = ({ text, href, external, ...rest }) => (
  <>
    {
      external
      ? <Button size="sm" fontWeight="bold" variant="ghost" as="a" target="_blank" href={href} {...rest}>{text}</Button>
      : <Link href={href}>
          <Button size="sm" fontWeight="bold" variant="ghost" {...rest}>{text}</Button>
        </Link>
    }
  </>
)