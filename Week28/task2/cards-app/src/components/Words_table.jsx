import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';

const originData = [
    { id: '10847', key: '1', english: 'butterfly', transcription: '[ ˈbʌtəflaɪ ]', russian: 'бабочка', tags: 'животные334', tags_json: '[\"u0436u0438u0432u043eu0442u043du044bu0435334\"]' },
    { id: '10848', english: 'hedgehog', transcription: '[ˈhedʒhɔːɡ]', russian: 'ёжик', tags: 'лдолдд', tags_json: '[\"u043bu0434u043eu043bu0434u0434\"]' },
    { id: '10853', english: 'apple', transcription: '[ˈæpl]', russian: 'яблоко', tags: 'рлоророл', tags_json: '[\"u0440u043bu043eu0440u043eu0440u043eu043b\"]' },
    { id: '10854', english: 'pear', transcription: '[peə]', russian: 'груша', tags: 'Array', tags_json: 'null' },
    { id: '10862', english: 'carrot', transcription: '[ˈkærət]', russian: 'морковка', tags: 'овощи', tags_json: '[\"u043eu0432u043eu0449u0438\"]' },
    { id: '10867', english: 'plum', transcription: '[plʌm]', russian: 'слива', tags: 'Array', tags_json: 'null' },
    { id: '10872', english: 'unicorn', transcription: '', russian: 'единорог', tags: 'Array', tags_json: 'null' },
    { id: '10874', english: 'cat', transcription: '[kæt]', russian: 'кот', tags: 'животные', tags_json: ' [\"u0436u0438u0432u043eu0442u043du044bu0435\"]' },
    { id: '10877', english: 'dfhfdh', transcription: 'fddf', russian: 'выпыпы', tags: 'ывпвыпы', tags_json: '[\"u044bu0432u043fu0432u044bu043fu044b\"]' },
    { id: '10878', english: 'sdgds', transcription: 'sdgds', russian: 'ывав', tags: 'выпвып', tags_json: '[\"u0432u044bu043fu0432u044bu043f\"]' },
    { id: '10879', english: 'butterfly', transcription: '[ˈyo͞onəˌkôrn]', russian: 'бабочка', tags: 'сказка', tags_json: '[\"u0441u043au0430u0437u043au0430\"]' }
];


const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};


function EditableTable() {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record) => record.key === editingKey;

    const edit = (record) => {
        form.setFieldsValue({
            english: '',
            transcription: '',
            russian: '',
            ...record,
        });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: 'english',
            dataIndex: 'english',
            width: '25%',
            editable: true,
        },
        {
            title: 'transcription',
            dataIndex: 'transcription',
            width: '25%',
            editable: true,
        },
        {
            title: 'russian',
            dataIndex: 'russian',
            width: '20%',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Save
                        </Typography.Link>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                        Edit
                    </Typography.Link>
                );
            },
        },
    ];

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'transcription' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <Form form={form} component={false}>
            <Table
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
                bordered
                dataSource={data}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                    onChange: cancel,
                }}
            />
        </Form>
    );
};

export default EditableTable;