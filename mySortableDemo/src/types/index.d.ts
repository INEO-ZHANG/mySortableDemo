declare module "sortablejs" {
  interface SortableOptions {
    // Add your sortable options here
  }

  interface SortableEvent {
    // Add your sortable event handlers here
  }

  interface Sortable {
    // Add your sortable methods here
  }

  function sortable(element: HTMLElement, options?: SortableOptions): Sortable;

  export default sortable;
}
