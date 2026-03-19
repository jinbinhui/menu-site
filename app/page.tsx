export default function Home() {
  const menuItems = [
    { name: "红烧肉", price: 38 },
    { name: "鱼香肉丝", price: 28 },
    { name: "麻婆豆腐", price: 22 },
    { name: "蒜蓉炒青菜", price: 16 },
    { name: "番茄蛋花汤", price: 12 },
  ];

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>今日菜单</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "left", paddingRight: "60px" }}>菜品</th>
            <th style={{ textAlign: "right" }}>价格</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.name}>
              <td style={{ padding: "8px 60px 8px 0" }}>{item.name}</td>
              <td style={{ textAlign: "right" }}>¥{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
