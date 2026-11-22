function NoticeArea({ totalScoops, scoopLimit }) {
  return (
    <>
      {totalScoops >= scoopLimit && <p>Scoop limit reached!</p>}
      {totalScoops === 0 && <p>Your order is empty</p>}
    </>
  );
}

export default NoticeArea;
