import {
  Breadcrumb,
  Button,
  Form,
  Input,
  Space,
  Select,
  Modal,
  message as mes,
} from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosWithMultipart } from "../../../../utils/axioswithmultipart";
export default function TambahAdmin() {
  const [dataNewAdmin, setdataNewAdmin] = useState({});
  const optionsRW = ["001", "002", "003", "004", "005"];
  const optionsRT = [
    "001",
    "002",
    "003",
    "004",
    "005",
    "006",
    "007",
    "008",
    "009",
    "010",
  ];
  const navigate = useNavigate();
  const handleSetDataAdmin = (e) => {
    setdataNewAdmin(e);
  };
  const handleAddAdmin = async () => {
    const url = `/administrasikelurahan/src/post/addAccountAdmin.php`;
    try {
      const response = await axiosWithMultipart(url, {
        method: "post",
        data: dataNewAdmin,
      });
      const { value, message } = response.data;
      if (value === 1) {
        mes.success(message);
        navigate("/Dashboard/Kelola-Admin");
      } else {
        mes.error(message);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    await handleAddAdmin();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
  }, [dataNewAdmin]);
  return (
    <div className="mx-20">
      {/* path */}
      <Breadcrumb
        items={[
          { title: "Admin" },
          { title: <Link to={"/Dashboard/Kelola-Admin"}>Kelola Admin</Link> },
          { title: <Link to={"/Dashboard/Kelola-Admin/"}>Tambah Admin</Link> },
        ]}
        style={{
          margin: "16px 0",
        }}
      />
      <div className="h-full self-center flex  p-6 bg-white">
        {/* form */}
        <Form
          onFinish={handleSetDataAdmin}
          layout="vertical"
          size={"medium"}
          className="w-full p-10 "
        >
          <Space
            direction="vertical"
            className="grid md:grid-cols-2 grid-cols-1 "
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
              <Input placeholder="Masukan Nama Admin" />
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
              <Input placeholder="Masukan Nama Admin" />
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
              <Input maxLength={17} placeholder="Masukan NIK Admin" />
            </Form.Item>
            <Form.Item
              name="rt"
              label="RT"
              rules={[
                {
                  required: true,
                  message: "Nomor RT tidak boleh kosong",
                },
                {
                  min: 3,
                  message: "RT minimal setidaknya 3 karakter",
                },
                {
                  pattern: /^[0-9]+$/,
                  message: "RT hanya boleh berisi angka",
                },
              ]}
            >
              <Select placeholder="Pilih RT ">
                {optionsRT.map((item, i) => (
                  <Select.Option key={i} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="rw"
              label="RW"
              rules={[
                {
                  required: true,
                  message: "Nomor RW tidak boleh kosong",
                },
                {
                  min: 3,
                  message: "RW minimal setidaknya 3 karakter",
                },
                {
                  pattern: /^[0-9]+$/,
                  message: "RW hanya boleh berisi angka",
                },
              ]}
            >
              <Select placeholder="Pilih RW ">
                {optionsRW.map((item, i) => (
                  <Select.Option key={i} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="nomor_telp"
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
                maxLength={20}
                placeholder="Masukan Nomor Telp Admin"
                value={dataNewAdmin.nomor_telp}
              />
            </Form.Item>

            <Form.Item name="jenis_kelamin" label="Jenis Kelamin" required>
              <Select
                placeholder="Pilih Jenis Kelamin"
                value={dataNewAdmin.jenis_kelamin}
              >
                <Select.Option value="Laki-Laki">Laki-Laki</Select.Option>
                <Select.Option value="Perempuan">Perempuan</Select.Option>
              </Select>
            </Form.Item>
          </Space>
          <Form.Item className="bg-third">
            <Button
              className="h-10"
              block
              type="primary"
              htmlType="submit"
              onClick={showModal}
            >
              Tambahkan
            </Button>
          </Form.Item>
        </Form>
        <>
          <Modal
            title="Apakah data sudah benar?"
            open={isModalOpen}
            footer={[
              <Button onClick={handleOk} className="bg-success text-white">
                Submit
              </Button>,
            ]}
            onCancel={handleCancel}
          >
            <div className="grid grid-cols-2  gap-2">
              <p> {dataNewAdmin.username}</p>
              <p>{dataNewAdmin.password}</p>
              <p> {dataNewAdmin.rt}</p>
              <p>{dataNewAdmin.rw}</p>
              <p>{dataNewAdmin.nomor_telp}</p>
              <p>{dataNewAdmin.jenis_kelamin}</p>
            </div>
          </Modal>
        </>
      </div>
    </div>
  );
}
