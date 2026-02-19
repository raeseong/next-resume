type MonthValue =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12";

export type YearMonth = `${number}-${MonthValue}`;

export type DateRange = {
  startDate: YearMonth;
  endDate?: YearMonth;
};

function parseYearMonth(value: YearMonth): Date {
  const [yearRaw, monthRaw] = value.split("-");
  const year = Number(yearRaw);
  const month = Number(monthRaw);

  if (!Number.isFinite(year) || !Number.isFinite(month) || month < 1 || month > 12) {
    throw new Error(`Invalid YearMonth value: ${value}`);
  }

  return new Date(year, month - 1, 1);
}

function toYearMonth(date: Date): YearMonth {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0") as MonthValue;
  return `${year}-${month}` as YearMonth;
}

function monthDiffInclusive(start: Date, end: Date): number {
  return (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth() + 1;
}

export function formatPeriod(range: DateRange): string {
  const start = parseYearMonth(range.startDate);
  const end = range.endDate ? parseYearMonth(range.endDate) : null;
  const startLabel = `${start.getFullYear()}.${String(start.getMonth() + 1).padStart(2, "0")}`;

  if (!end) {
    return `${startLabel} ~`;
  }

  const endLabel = `${end.getFullYear()}.${String(end.getMonth() + 1).padStart(2, "0")}`;
  return `${startLabel} ~ ${endLabel}`;
}

export function formatDuration(range: DateRange, referenceDate = new Date()): string {
  const start = parseYearMonth(range.startDate);
  const currentYearMonth = toYearMonth(new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 1));
  const end = parseYearMonth(range.endDate ?? currentYearMonth);
  const totalMonths = Math.max(1, monthDiffInclusive(start, end));
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months}개월`;
  }

  if (months === 0) {
    return `${years}년`;
  }

  return `${years}년 ${months}개월`;
}
