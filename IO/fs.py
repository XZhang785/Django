# -*- coding: utf-8 -*- 
# @Time : 2023/5/6 21:50 
# @Author : zhangqinming
# @File : fs.py

from hdfs import InsecureClient
from typing import List, Optional


class HDFSClient:
    DIR_TYPE = 'DIRECTORY'
    FILE_TYPE = 'FILE'
    base_dir = '/electric-analyse/data'

    def __init__(self, hdfs_url: str, user: str):
        self.hdfs = InsecureClient(hdfs_url, user)

    def existed(self, path: str) -> bool:
        """
        判断HDFS上是否存在文件或文件夹
        :param path: 文件或文件夹的绝对路径
        :return: 存在返回True，不存在返回False
        """
        status = self.hdfs.status(path, strict=False)
        if status is not None:
            return True
        else:
            return False

    def get_path_type(self, path: str) -> str:
        """
        获取文件的类型
        :param path: 文件或文件夹的绝对路径
        :return: 如果文件在HDFS上，会返回文件的类型，否则返回’error_type‘
        """
        status = self.hdfs.status(path, strict=False)
        if status is not None:
            return status['type']
        else:
            return 'error_type'

    def list_hdfs(self) -> List[str]:
        """
        列出当前目录下的所有文件名
        :return: 以列表的形式返回当前目录下的文件名
        """
        return self.hdfs.list(self.base_dir)

    def choose_dir(self, path: str) -> None:
        """
        选择当前目录的下一级目录，如果该目录存在，则会改变当前的目录
        :param path: 文件名
        :return: 空
        """
        if self.get_path_type(path) == self.DIR_TYPE:
            self.base_dir = self.base_dir + "/" + path
            print('the base dir is turn to ' + path)
        else:
            print('choose dir ' + path + ' error!!')

    def choose_file(self, file_name: str) -> Optional[str]:
        """
        选择当前目录下的文件
        :param file_name: 在当前目录下的文件名
        :return: 返回文件的绝对路径
        """
        file_path = self.base_dir + '/' + file_name
        if self.get_path_type(file_path) == self.FILE_TYPE:
            return file_path
        else:
            print(file_name, " is not exist")
            return None

    def change_base_dir(self, path: str) -> None:
        """
        更改工作文件夹
        :param path: 文件夹的绝对路径
        :return: None
        """
        if self.get_path_type(path) == self.DIR_TYPE:
            self.base_dir = path
            print('the base dir is change to ' + path)
        else:
            print('change dir ' + path + ' error!!')

    def read_hdfs_file(self, file_name: str):
        """
        从HDFS上读取文件内容
        :param file_name: 文件在HDFS上的文件名
        :return: 文件内容
        """
        file_path = self.choose_file(file_name)
        with self.hdfs.read(file_path, encoding='utf-8') as f:
            content = f.read()
        return content

if __name__ == '__main__':
    hdfs = HDFSClient("hdfs://localhost:9000", "zhangqinming")
    print("success connect!")
    print(hdfs.list_hdfs())
    pcontent = f.read()