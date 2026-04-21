import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../components/admin/Admin.module.css';

import studentsData from '../../data/students.json';
import slidersData from '../../data/sliders.json';
import videosData from '../../data/videos.json';
import facultyData from '../../data/faculty.json';
import staffData from '../../data/staff.json';
import transportData from '../../data/transport.json';

const dataMap = {
  students: studentsData,
  sliders: slidersData,
  videos: videosData,
  faculty: facultyData,
  staff: staffData,
  transport: transportData
};

// Extract YouTube video ID from any YouTube URL format
const extractYouTubeId = (url) => {
  if (!url) return '';
  // Handle already-bare IDs (no slashes)
  if (!url.includes('/') && !url.includes('.')) return url;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return url;
};

// ── Videos-specific editor ─────────────────────────────────────────────────
const VideosEditor = ({ videos, onChange }) => {
  const handleFieldChange = (index, field, value) => {
    const updated = [...videos];
    if (field === 'youtubeUrl') {
      const embedId = extractYouTubeId(value);
      updated[index] = {
        ...updated[index],
        youtubeUrl: value,
        embedId,
        thumbnail: embedId
          ? `https://img.youtube.com/vi/${embedId}/maxresdefault.jpg`
          : '',
      };
    } else {
      updated[index] = { ...updated[index], [field]: value };
    }
    onChange(updated);
  };

  const handleAdd = () => {
    const newId = videos.length > 0 ? Math.max(...videos.map(v => v.id || 0)) + 1 : 1;
    onChange([...videos, { id: newId, title: '', youtubeUrl: '', embedId: '', thumbnail: '' }]);
  };

  const handleDelete = (index) => {
    const updated = [...videos];
    updated.splice(index, 1);
    onChange(updated);
  };

  return (
    <div>
      {videos.map((item, index) => (
        <div key={index} className={styles.box}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            <div className={styles.inputGroup} style={{ flex: '1 1 300px' }}>
              <label>TITLE (শিরোনাম)</label>
              <input
                type="text"
                value={item.title}
                onChange={e => handleFieldChange(index, 'title', e.target.value)}
                placeholder="ভিডিওর শিরোনাম লিখুন"
              />
            </div>
            <div className={styles.inputGroup} style={{ flex: '1 1 300px' }}>
              <label>YOUTUBE LINK (YouTube লিংক)</label>
              <input
                type="text"
                value={item.youtubeUrl || `https://www.youtube.com/watch?v=${item.embedId}`}
                onChange={e => handleFieldChange(index, 'youtubeUrl', e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
              />
            </div>
          </div>
          {item.embedId && (
            <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src={item.thumbnail}
                alt="preview"
                style={{ width: '120px', borderRadius: '6px', border: '1px solid #E5E7EB' }}
                onError={e => { e.target.style.display = 'none'; }}
              />
              <span style={{ fontSize: '0.8rem', color: '#6B7280' }}>
                Embed ID: <code style={{ background: '#F3F4F6', padding: '2px 6px', borderRadius: '4px' }}>{item.embedId}</code>
              </span>
            </div>
          )}
          <button className={styles.deleteBtn} onClick={() => handleDelete(index)}>
            মুছে ফেলুন (Delete)
          </button>
        </div>
      ))}
      <button className={styles.addBtn} onClick={handleAdd}>
        + নতুন ভিডিও যুক্ত করুন (Add New Video)
      </button>
    </div>
  );
};

// ── Generic editor for all other types ────────────────────────────────────
const GenericEditor = ({ type, listData, isListWithSummary, data, setData }) => {
  const handleItemChange = (index, field, value) => {
    const newList = [...listData];
    newList[index] = { ...newList[index], [field]: value };

    if (isListWithSummary && field === 'gender') {
      const summary = { male: 0, female: 0, total: newList.length };
      newList.forEach(item => {
        if (item.gender === 'male') summary.male++;
        if (item.gender === 'female') summary.female++;
      });
      setData({ ...data, list: newList, summary });
    } else {
      setData(isListWithSummary ? { ...data, list: newList } : newList);
    }
  };

  const handleAdd = () => {
    const newList = [...listData];
    const newId = newList.length > 0 ? Math.max(...newList.map(d => d.id || 0)) + 1 : 1;
    let newItem = { id: newId };
    if (newList.length > 0) {
      Object.keys(newList[0]).forEach(k => {
        if (k === 'id') newItem[k] = newId;
        else if (k === 'count') newItem[k] = 0;
        else if (k === 'gender') newItem[k] = 'male';
        else newItem[k] = '';
      });
    } else {
      newItem = { id: newId, name: '' };
    }
    newList.push(newItem);

    if (isListWithSummary) {
      const summary = { male: 0, female: 0, total: newList.length };
      newList.forEach(item => {
        if (item.gender === 'male') summary.male++;
        if (item.gender === 'female') summary.female++;
      });
      setData({ ...data, list: newList, summary });
    } else {
      setData(newList);
    }
  };

  const handleDelete = (index) => {
    const newList = [...listData];
    newList.splice(index, 1);
    if (isListWithSummary) {
      const summary = { male: 0, female: 0, total: newList.length };
      newList.forEach(item => {
        if (item.gender === 'male') summary.male++;
        if (item.gender === 'female') summary.female++;
      });
      setData({ ...data, list: newList, summary });
    } else {
      setData(newList);
    }
  };

  return (
    <div>
      {listData.map((item, index) => (
        <div key={index} className={styles.box}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            {Object.keys(item).map(key => {
              if (key === 'id') return null;
              return (
                <div key={key} className={styles.inputGroup} style={{ flex: '1 1 220px' }}>
                  <label>{key.toUpperCase()}</label>
                  {key === 'gender' ? (
                    <select
                      value={item[key]}
                      onChange={e => handleItemChange(index, key, e.target.value)}
                    >
                      <option value="male">Male (পুরুষ)</option>
                      <option value="female">Female (মহিলা)</option>
                    </select>
                  ) : key === 'count' ? (
                    <input
                      type="number"
                      value={item[key]}
                      onChange={e => handleItemChange(index, key, parseInt(e.target.value, 10) || 0)}
                    />
                  ) : (
                    <input
                      type="text"
                      value={item[key]}
                      onChange={e => handleItemChange(index, key, e.target.value)}
                      placeholder={`Enter ${key}`}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <button className={styles.deleteBtn} onClick={() => handleDelete(index)}>
            মুছে ফেলুন (Delete)
          </button>
        </div>
      ))}
      <button className={styles.addBtn} onClick={handleAdd}>
        + নতুন তথ্য যুক্ত করুন (Add New Row)
      </button>
    </div>
  );
};

// ── Main Dashboard ─────────────────────────────────────────────────────────
const AdminDashboard = () => {
  const { type } = useParams();
  const [data, setData] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (dataMap[type]) {
      setData(JSON.parse(JSON.stringify(dataMap[type])));
    } else {
      setData(null);
    }
  }, [type]);

  const handleSave = async () => {
    setIsSaving(true);
    // For videos: strip the helper `youtubeUrl` field before saving
    let saveData = data;
    if (type === 'videos') {
      saveData = data.map(({ youtubeUrl, ...rest }) => rest);
    }
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: `${type}.json`, data: saveData }),
      });
      const result = await response.json();
      if (result.success) {
        alert('সফলভাবে সেভ হয়েছে! ✅');
      } else {
        alert('সেভ হয়নি: ' + result.error);
      }
    } catch {
      alert('Error: Please ensure npm run dev is running locally.');
    }
    setIsSaving(false);
  };

  if (!data) return (
    <div style={{ padding: '60px', color: '#6B7280', textAlign: 'center' }}>
      ← বাম সাইডবার থেকে একটি বিভাগ নির্বাচন করুন
    </div>
  );

  const isListWithSummary = !Array.isArray(data) && data.list !== undefined;
  const listData = isListWithSummary ? data.list : data;

  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.title}>Editing: {type.toUpperCase()}</h2>
        <button className={styles.saveBtn} onClick={handleSave} disabled={isSaving}>
          {isSaving ? 'সেভ হচ্ছে...' : 'সেভ করুন (Save Changes)'}
        </button>
      </div>

      {type === 'videos' ? (
        <VideosEditor videos={data} onChange={setData} />
      ) : (
        <GenericEditor
          type={type}
          listData={listData}
          isListWithSummary={isListWithSummary}
          data={data}
          setData={setData}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
