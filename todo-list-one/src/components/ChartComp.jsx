// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'January', bugsFixed: 25, featuresAdded: 10, commits: 200 },
//   { name: 'February', bugsFixed: 30, featuresAdded: 15, commits: 180 },
//   { name: 'March', bugsFixed: 20, featuresAdded: 20, commits: 220 },
//   { name: 'April', bugsFixed: 15, featuresAdded: 25, commits: 250 },
//   { name: 'May', bugsFixed: 10, featuresAdded: 30, commits: 230 },
//   { name: 'June', bugsFixed: 20, featuresAdded: 35, commits: 210 },
//   { name: 'July', bugsFixed: 18, featuresAdded: 28, commits: 240 },
// ];

// const temperatureData = [
//   { time: '00:00', temperature: 5 },
//   { time: '06:00', temperature: 8 },
//   { time: '12:00', temperature: 15 },
//   { time: '18:00', temperature: 12 },
//   { time: '22:00', temperature: 7 },
// ];

// const ChartComp = () => {
//   return (
//     <ResponsiveContainer width="100%" height={400}>
//       <LineChart data={temperatureData}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis 
        
//           dataKey="time" 
//           label={{
//             value: 'Time of Day', // Текст для подписи оси X
//             position: 'insideBottom', // Позиция подписи
//             offset: 0, // Отступ
//           }} 
//         />
//         <YAxis 
//           label={{
//             value: 'Temperature (°C)', // Текст для подписи оси Y
//             angle: -90, // Угол наклона подписи
//             position: 'insideLeft', // Позиция подписи
//             offset: 10, // Отступ от оси Y
//           }} 
//         />
//         <Tooltip />
//         {/* <Legend /> */}
//         <Line 
//           type="monotone" 
//           dataKey="temperature" 
//           stroke="#ff7300" 
//           activeDot={{ r: 8 }} 
//         />
//       </LineChart>
//     </ResponsiveContainer>
//   );
// };

// export default ChartComp;







import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import * as XLSX from 'xlsx';

const ChartComp = () => {
  const [data, setData] = useState([]);
  
  // Функция для обработки файла
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const binaryStr = reader.result;
        const wb = XLSX.read(binaryStr, { type: 'binary' });

        // Получаем первый лист
        const ws = wb.Sheets[wb.SheetNames[0]];
        
        // Преобразуем данные листа в JSON
        const jsonData = XLSX.utils.sheet_to_json(ws);

        // Преобразуем данные в формат для графика
        const formattedData = jsonData.map(row => ({
          time: row['Time'],  // предполагаем, что столбец с временем называется 'Time'
          temperature: row['Temperature'],  // и температура в столбце 'Temperature'
        }));

        setData(formattedData);
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div>
      <h1>График зависимости температуры от времени</h1>
      
      {/* Кнопка загрузки файла */}
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      
      {/* Проверка, если данных нет, то отображаем сообщение */}
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p>Пожалуйста, загрузите файл с данными.</p>
      )}
    </div>
  );
};

export default ChartComp;
