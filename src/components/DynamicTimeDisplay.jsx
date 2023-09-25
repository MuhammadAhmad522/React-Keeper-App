import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";

function DynamicTimeDisplay({ timestamp }) {
  const [formattedTime, setFormattedTime] = useState(() => {
    return formatDistanceToNow(timestamp, {
      addSuffix: true,
      locale: enUS,
    });
  });

  useEffect(() => {
    // Update the time every minute (optional)
    const interval = setInterval(() => {
      const updated = formatDistanceToNow(timestamp, {
        addSuffix: true,
        locale: enUS,
      });
      setFormattedTime(updated);
    }, 60000);

    return () => clearInterval(interval);
  }, [timestamp]);

  return <span>{formattedTime}</span>;
}

export default DynamicTimeDisplay;
