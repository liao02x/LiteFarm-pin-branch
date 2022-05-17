import React from 'react';
import Layout from '../Layout';
import PageTitle from '../PageTitle/v2';
import RouterTab from '../RouterTab';
import { useTranslation } from 'react-i18next';
import { Semibold } from '../Typography';
import TaskCount from '../Task/TaskCount';
import TaskCard from '../../containers/Task/TaskCard';
import PageBreak from '../PageBreak';
import { getLanguageFromLocalStorage } from '../../util/getLanguageFromLocalStorage';

export default function PureLocationTasks({ location, history, match, hasCrops, tasks, count }) {
  const language = getLanguageFromLocalStorage();
  const { t } = useTranslation();

  const renderTasksForDay = (dateString, tasksForDate) => (
    <>
      <PageBreak
        style={{ paddingBottom: '22px' }}
        label={new Intl.DateTimeFormat(language).format(Date.parse(dateString))}
      />
      {tasksForDate.map((t) => (
        <TaskCard
          key={t.task_id}
          onClick={() => history.push(`/tasks/${t.task_id}/read_only`)}
          style={{ marginBottom: '14px' }}
          {...t}
        />
      ))}
    </>
  );

  const renderTasksByDay = (tasks) => {
    return Object.keys(tasks).map((key) => renderTasksForDay(key, tasks[key]));
  };

  const handleAddTask = () => {
    history.push('/add_task/task_type_selection', { location });
  };

  const routerTabs = hasCrops
    ? [
        {
          label: t('FARM_MAP.TAB.CROPS'),
          path: match.url.replace('tasks', 'crops'),
        },
        {
          label: t('FARM_MAP.TAB.TASKS'),
          path: match.url,
        },
        {
          label: t('FARM_MAP.TAB.DETAILS'),
          path: match.url.replace('tasks', 'details'),
        },
      ]
    : [
        {
          label: t('FARM_MAP.TAB.TASKS'),
          path: match.url,
        },
        {
          label: t('FARM_MAP.TAB.DETAILS'),
          path: match.url.replace('tasks', 'details'),
        },
      ];

  return (
    <Layout>
      <PageTitle title={location.name} onGoBack={() => history.push('/map')} />
      <RouterTab
        classes={{ container: { margin: '30px 0 26px 0' } }}
        history={history}
        match={match}
        tabs={routerTabs}
      />
      <TaskCount handleAddTask={handleAddTask} count={count} />
      {count > 0 ? (
        renderTasksByDay(tasks)
      ) : (
        <Semibold style={{ color: 'var(--teal700)' }}>{t('TASK.NO_TASKS_TO_DISPLAY')}</Semibold>
      )}
    </Layout>
  );
}
