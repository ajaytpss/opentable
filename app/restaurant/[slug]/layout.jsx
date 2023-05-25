import Header from "./components/Header";

function RestaurantLayout({ children, params }) {
  return (
    <>
      <Header slug={params.slug} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </>
  );
}

export default RestaurantLayout;
