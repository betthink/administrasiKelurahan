import { Breadcrumb, Form, Space } from "antd";
import React, { useState } from "react";
export default function TambahAdmin() {
  const [dataAdmin, setdataAdmin] = useState({
    username: "",
    password: "",
    nik: "",
    rt: "",
    rw: "",
  });
  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setdataAdmin((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(dataAdmin);
  };
  return (
    <div className="mx-20">
      {/* path */}
      <Breadcrumb
        items={[
          { title: "Admin" },
          { title: <Link to={"/KelolaPenduduk"}>Kelola Penduduk</Link> },
          { title: <Link to={"/KelolaPenduduk"}>Tambah Penduduk</Link> },
        ]}
        style={{
          margin: "16px 0",
        }}
      />
      <div className="h-full self-center flex  p-6 bg-white">
        {/* form */}
        <Form
          //   onFinish={onFinish}
          layout="vertical"
          size={"medium"}
          className="w-full justify-center flex  flex-col "
        >
          <Space
            direction="vertical"
            className="grid md:grid-cols-2 grid-cols-1"
          >
            <Form.Item
              rules={[
                {
                  required: true,
                },
              ]}
              name="username"
              label="username"
            >
              <Input
                placeholder="Masukan Nama Penduduk"
                value={dataEntry.nama}
              />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                },
              ]}
              name="password"
              label="password"
            >
              <Input
                placeholder="Masukan Nama Penduduk"
                value={dataEntry.nama}
              />
            </Form.Item>
            <Form.Item
              name="nik"
              label="NIK"
              rules={[
                {
                  required: true,
                  message: "NIK tidak boleh kosong",
                },
                {
                  min: 16,
                  message: "NIK minimal setidaknya 16 karakter",
                },
                {
                  pattern: /^[0-9]+$/,
                  message: "NIK hanya boleh berisi angka",
                },
              ]}
            >
              <Input placeholder="Masukan NIK Penduduk" value={dataEntry.nik} />
            </Form.Item>
            <Form.Item
              name="RT"
              label="RT"
              rules={[
                {
                  required: true,
                  message: "Nomor KK tidak boleh kosong",
                },
                {
                  min: 16,
                  message: "Nomor KK minimal setidaknya 16 karakter",
                },
                {
                  pattern: /^[0-9]+$/,
                  message: "Nomor KK hanya boleh berisi angka",
                },
              ]}
            >
              <Input
                placeholder="Masukan Nomor KK Penduduk"
                value={dataEntry.no_kk}
              />
            </Form.Item>
            <Form.Item name="RW" label="RW" required>
              <Input
                placeholder="Masukan RW Penduduk"
                value={dataEntry.alamat}
              />
            </Form.Item>
            <Form.Item
              name="nomorTelp"
              label="Nomor Telp"
              required
              rules={[
                {
                  pattern: /^[0-9]+$/,
                  message: "Nomor Telepon hanya boleh berisi angka",
                },
              ]}
            >
              <Input
                placeholder="Masukan Npmor Telp Penduduk"
                value={dataEntry.nomor_telp}
              />
            </Form.Item>

            <Form.Item name="tanggalLahir" label="Tanggal Lahir" required>
              <DatePicker
                placeholder="Pilih Kelahiran Tanggal"
                style={{ width: "100%" }}
                value={dataEntry.tanggal_lahir}
              />
            </Form.Item>

            <Form.Item name="tempatLahir" label="Tempat Lahir" required>
              <Input
                placeholder="Masukan Tempat Lahir Sesuai KTP"
                value={dataEntry.tempat_lahir}
              />
            </Form.Item>

            <Form.Item name="jenisKelamin" label="Jenis Kelamin" required>
              <Select
                placeholder="Pilih Jenis Kelamin"
                value={dataEntry.jenis_kelamin}
              >
                <Select.Option value="Laki-Laki">Laki-Laki</Select.Option>
                <Select.Option value="Perempuan">Perempuan</Select.Option>
              </Select>
            </Form.Item>
          </Space>
          <Form.Item className="bg-purp">
            <Button block type="primary" htmlType="submit" onClick={showModal}>
              Tambahkan
            </Button>
          </Form.Item>
        </Form>
        <>
          {/* <Modal
            title="Apakah Data Sudah Benar?"
            open={isModalOpen}
            bodyStyle={{}}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>nama: {dataEntry.nama}</p>
            <p>nik: {dataEntry.nik}</p>
            <p>noKK: {dataEntry.no_kk}</p>
            <p>alamat: {dataEntry.alamat}</p>
            <p>nomorTelp: {dataEntry.nomor_telp}</p>
            <p>tempat_lahir: {dataEntry.tempat_lahir}</p>
            <p>kepala Keluarga: {dataEntry.kepala_keluarga}</p>
            <p>darah: {dataEntry.darah}</p>
            <p>tangga lLahir: {dataEntry.tanggal_lahir}</p>
            <p>jenis Kelamin: {dataEntry.jenis_kelamin}</p>
            <p>status: {dataEntry.status}</p>
            <p>status Penduduk: {dataEntry.statusPenduduk}</p>
          </Modal> */}
        </>
      </div>
    </div>
  );
}
