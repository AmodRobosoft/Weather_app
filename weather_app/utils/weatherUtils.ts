export const getGradientForWeather = (condition: string): string[] => {
  const map: Record<string, string[]> = {
    Clear: ["#FEE685CC", "#FFB86A80"],
    Sunny: ["#FEE685CC", "#FFB86A80"],
    Clouds: ["#E5E7EBB2", "#CAD5E280"],
    Rain: ["#BEDBFF99", "#74D4FF80"],
    Drizzle: ["#BEDBFF99", "#74D4FF80"],
    Thunderstorm: ["#C4B4FF99", "#8EC5FF80"],
    Snow: ["#E0F7FACC", "#B2EBF280"],
    Mist: ["#F5F5F5B2", "#E0E0E080"],
  };
  return map[condition] ?? ["#A2F4FDB2", "#51A2FF80"];
};
