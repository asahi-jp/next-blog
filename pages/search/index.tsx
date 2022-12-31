import { Button, DatePicker } from 'antd';

export default function Index() {
  return (
    <section className="bg-white h-96">
      <div>
        検索バー
        <Button type="primary">Primary Button</Button>
        <DatePicker />
      </div>
      <div>
        タグ一覧
      </div>
    </section>
  )
}