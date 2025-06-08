import TimeLife from "./TimeLife";
const FlashSales = () => {
  return (
    <main className="px-30 mt-50">
      <div className="flex items-center gap-1.5">
        <div className="h-[40px] w-[20px] bg-secondary2"></div>
        <p className="text-secondary2">Today's</p>
      </div>
      <TimeLife />
    </main>
  );
};

export default FlashSales;
