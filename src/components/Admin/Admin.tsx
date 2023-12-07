import React, {useEffect, useState} from 'react';
import axiosApi from '../../axiosApi';
import Loader from '../Loader/Loader';
import {useNavigate} from 'react-router-dom';

interface Props {
  pages: string;
}

interface Pages {
  title: string;
  content: string;
}

const Admin = () => {
  const [edit, setEdit] = useState<Props>({
    pages: '',
  });

  const [pagesInfo, setPagesInfo] = useState<Pages>({
    title: '',
    content: '',
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = event.target;

    setEdit((prev) => ({...prev, [name]: value}));
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setPagesInfo((prev) => ({...prev, [name]: value}));
  };

  const editPages = edit.pages.toLowerCase();

  useEffect(() => {
    setLoading(true);
    const urlFetch = async () => {
      try {
        if (edit.pages === '') {
          return;
        } else {
          const response = await axiosApi.get('pages/' + editPages + '.json');
          setPagesInfo(response.data);
        }
      } finally {
        setLoading(false);
      }
    };

    void urlFetch();
  }, [edit]);

  const formSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await axiosApi.put('pages/' + editPages + '.json', pagesInfo);
    } catch (err) {
      console.log('Error ' + err);
    }

    navigate('/pages/' + editPages);
  };

  let elemInfo = (
    <div>
      <form onSubmit={formSubmit} className="d-flex flex-column w-75 ms-auto me-auto gap-2">
        <h3>Edit pages</h3>
        Select pages
        <select id="pages" name="pages" onChange={onChange} value={edit.pages} required>
          <option value=""></option>
          <option>Home</option>
          <option>About</option>
          <option>Contacts</option>
          <option>Courses</option>
        </select>
        <input name="title" id="title" required value={pagesInfo.title} onChange={onChangeInput}/>
        <textarea name="content" id="content" required value={pagesInfo.content} onChange={onChangeInput} />
        <button type="submit" className="btn btn-warning">Save</button>
      </form>
    </div>
  )

  if (loading) {
    elemInfo = (
      <Loader />
    )
  }

  return (
    <div>
      {elemInfo}
    </div>
  );
};

export default Admin;