import ProductList from "./ProductList";

export default function ProductsPage() {
  return (
    <main className="p-6 space-y-6">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Our Courses & eBooks</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Learn with exclusive content to advance your tech career.
        </p>
      </header>
      <ProductList />
    </main>
  );
}
