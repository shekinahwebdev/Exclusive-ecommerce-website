import TimeLife from "./TimeLife";
const FlashSales = () => {
  return (
    <main className="pl-2">
      <div className="flex items-center gap-4">
        <div className="h-[40px] w-[20px] bg-secondary2 rounded-[5px]"></div>
        <p className="text-secondary2 text-[16px]">Today's</p>
      </div>
      <TimeLife />
    </main>
  );
};

export default FlashSales;
