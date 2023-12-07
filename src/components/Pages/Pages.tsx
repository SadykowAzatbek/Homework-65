import {useEffect, useState} from 'react';
import axiosApi from '../../axiosApi';
import {useParams} from 'react-router-dom';
import Loader from '../Loader/Loader';

interface Props {
  title: string;
  content: string;
}

const Pages = () => {
  const [content, setContent] = useState<Props>({
    title: '',
    content: '',
  });

  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchUrl =  async () => {
      try {
        const response = await axiosApi.get('/pages/' + params.pageName + '.json');

        setContent(response.data);
      } finally {
        setLoading(false);
      }
    };

    void fetchUrl();
  }, [params.pageName]);

  let contentInfo = (
    <div>
      <h4>{content.title}</h4>
      <p>{content.content}</p>
    </div>
  );

  if (loading) {
    contentInfo = (
      <Loader />
    )
  }

  return (
    <div>
      {contentInfo}
    </div>
  );
};

export default Pages;