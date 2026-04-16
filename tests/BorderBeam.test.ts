import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import BorderBeam from "../src/BorderBeam.vue";

describe("BorderBeam", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "matchMedia",
      vi.fn().mockReturnValue({
        matches: true,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe("rendering", () => {
    it("renders slot content", () => {
      const wrapper = mount(BorderBeam, {
        slots: { default: '<div class="child">Hello</div>' },
      });
      expect(wrapper.find(".child").text()).toBe("Hello");
    });

    it("renders bloom div", () => {
      const wrapper = mount(BorderBeam, {
        slots: { default: "<div>Hello</div>" },
      });
      expect(wrapper.find("[data-beam-bloom]").exists()).toBe(true);
    });

    it("has data-beam attribute on wrapper", () => {
      const wrapper = mount(BorderBeam, {
        slots: { default: "<div>Hello</div>" },
      });
      expect(wrapper.find("[data-beam]").exists()).toBe(true);
    });

    it("renders inline style tag with beam CSS", () => {
      const wrapper = mount(BorderBeam, {
        slots: { default: "<div>Hello</div>" },
      });
      // Style tag is rendered as a sibling via <component :is="'style'">
      const html = wrapper.html();
      expect(html).toContain("@property");
      expect(html).toContain("beam-spin");
    });
  });

  describe("active state", () => {
    it("sets data-active when active (default)", () => {
      const wrapper = mount(BorderBeam, {
        slots: { default: "<div>Hello</div>" },
      });
      const el = wrapper.find("[data-beam]");
      expect(el.attributes("data-active")).toBeDefined();
    });

    it("does not set data-active when active=false", () => {
      const wrapper = mount(BorderBeam, {
        props: { active: false },
        slots: { default: "<div>Hello</div>" },
      });
      const el = wrapper.find("[data-beam]");
      expect(el.attributes("data-active")).toBeUndefined();
    });

    it("sets data-fading when transitioning from active to inactive", async () => {
      const wrapper = mount(BorderBeam, {
        props: { active: true },
        slots: { default: "<div>Hello</div>" },
      });
      await wrapper.setProps({ active: false });
      await nextTick();
      const el = wrapper.find("[data-beam]");
      expect(el.attributes("data-fading")).toBeDefined();
    });
  });

  describe("strength", () => {
    it("sets --beam-strength CSS variable", () => {
      const wrapper = mount(BorderBeam, {
        props: { strength: 0.5 },
        slots: { default: "<div>Hello</div>" },
      });
      const el = wrapper.find("[data-beam]");
      expect(el.attributes("style")).toContain("--beam-strength");
    });

    it("clamps strength to 0-1 range", () => {
      const wrapper = mount(BorderBeam, {
        props: { strength: 2 },
        slots: { default: "<div>Hello</div>" },
      });
      const el = wrapper.find("[data-beam]");
      const style = el.attributes("style") ?? "";
      expect(style).toContain("--beam-strength: 1");
    });
  });

  describe("events", () => {
    it("emits activate on fade-in animation end", async () => {
      const wrapper = mount(BorderBeam, {
        slots: { default: "<div>Hello</div>" },
      });
      const el = wrapper.find("[data-beam]");
      await el.trigger("animationend", { animationName: "beam-fade-in-test" });
      expect(wrapper.emitted("activate")).toHaveLength(1);
    });

    it("emits deactivate on fade-out animation end", async () => {
      const wrapper = mount(BorderBeam, {
        props: { active: true },
        slots: { default: "<div>Hello</div>" },
      });
      await wrapper.setProps({ active: false });
      await nextTick();
      const el = wrapper.find("[data-beam]");
      await el.trigger("animationend", { animationName: "beam-fade-out-test" });
      expect(wrapper.emitted("deactivate")).toHaveLength(1);
    });
  });

  describe("attrs fallthrough", () => {
    it("passes class and data attributes to wrapper", () => {
      const wrapper = mount(BorderBeam, {
        attrs: {
          class: "custom-class",
          "data-testid": "beam",
        },
        slots: { default: "<div>Hello</div>" },
      });
      const el = wrapper.find("[data-beam]");
      expect(el.classes()).toContain("custom-class");
      expect(el.attributes("data-testid")).toBe("beam");
    });
  });

  describe("props", () => {
    it("uses default size md", () => {
      const wrapper = mount(BorderBeam, {
        slots: { default: "<div>Hello</div>" },
      });
      expect(wrapper.find("[data-beam]").exists()).toBe(true);
    });

    it("accepts all size variants", () => {
      for (const size of ["sm", "md", "line"] as const) {
        const wrapper = mount(BorderBeam, {
          props: { size },
          slots: { default: "<div>Hello</div>" },
        });
        expect(wrapper.find("[data-beam]").exists()).toBe(true);
        wrapper.unmount();
      }
    });

    it("accepts all color variants", () => {
      for (const colorVariant of ["colorful", "mono", "ocean", "sunset"] as const) {
        const wrapper = mount(BorderBeam, {
          props: { colorVariant },
          slots: { default: "<div>Hello</div>" },
        });
        expect(wrapper.find("[data-beam]").exists()).toBe(true);
        wrapper.unmount();
      }
    });
  });
});
