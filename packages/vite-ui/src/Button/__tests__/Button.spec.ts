import { shallowMount } from "@vue/test-utils";
import Button from "../JSXButton";

describe("Button", () => {
  test("mount @vue/test-utils", () => {
    const wapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(wapper.text()).toBe("Button");
  });
});
