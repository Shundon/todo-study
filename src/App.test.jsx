import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, test } from "vitest";
import { App } from "./App";

afterEach(() => {
  cleanup();
});

describe("App", () => {
  test("Todo Listが表示される", () => {
    render(<App />);

    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });

  test("初期Todoが表示される", () => {
    render(<App />);

    expect(screen.getByText("ToDo1")).toBeInTheDocument();
    expect(screen.getByText("ToDo2")).toBeInTheDocument();
  });

  test("Todoを追加できる", async () => {
    const user = userEvent.setup();

    render(<App />);

    const input = screen.getByRole("textbox");

    await user.type(input, "ToDo3");
    await user.keyboard("{Enter}");

    expect(screen.getByText("ToDo3")).toBeInTheDocument();
    expect(input).toHaveValue("");
  });
});