import { Text, Group } from "@mantine/core";
import type { FooterProps } from "../libs/Footer";
export default function Footer( {}: FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        © CPE207-2025 Tunyasopark Saowapark 620612151. All rights reserved.
      </Text>
    </Group>
  );
}
