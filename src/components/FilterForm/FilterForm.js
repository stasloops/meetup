'use client';

import { useEffect, useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Select } from '../Kit/Select/Select';
import { FilterForm as FF, FFSection, FFSectionTxt, FFWrapper, FFSectionTxtButton } from '../../styles/blocks/FilterForm';
import { FormCheckField } from './FormCheckField/FormCheckField';
import { FormCategoryCheckField } from './FormCategoryCheckField/FormCategoryCheckField';
import { getFilterParams } from '../../data/api/statisticsApi';
import { filterMatrix, paymentMatrix, typeGroups } from '../../helpers/filterMatrix';
import { ColFlex } from '../../styles/blocks/Flex';

export function FilterForm({ onChange, initialState, theme, mobileState, countParams, setCountParams }) {
  const [filterParams, setFilterParams] = useState({});
  const { handleSubmit, control, reset } = useFormContext();

  useEffect(() => {
    const getData = async () => {
      const data = await getFilterParams({ theme });
      const groupTypes = {};

      data?.type.forEach(({ name, _count: count }) => {
        if (!typeGroups[name]) return;
        if (!groupTypes[typeGroups[name]]) groupTypes[typeGroups[name]] = { types: [], count: 0 };

        const group = groupTypes[typeGroups[name]];
        group.types.push(name);
        group.count += +count;
      });

      if (Object.keys(groupTypes).length) {
        data.groups = groupTypes;
      }

      setFilterParams(data);
    };

    void getData();
  }, []);

  const onSubmit = (formData) => {
    const newParams = { ...initialState };
    let selectedCount = 0;
    [...Object.keys(initialState), 'group'].forEach((key) => {
      if (!formData[key]) return;
      if (key !== 'place' && !Object.values(formData[key]).includes(true)) return;

      let values = [];

      switch (key) {
        case 'place':
          newParams[key] = formData[key].value;

          if (newParams[key]) ++selectedCount;
          break;
        case 'group':
          values = Object.keys(formData[key]).filter((item) => formData[key][item]);
          values.forEach((item) => {
            newParams.type = newParams.type ? [...newParams.type, ...filterParams.groups[item].types] : [...filterParams.groups[item].types];
          });
          selectedCount += values.length;
          break;
        case 'payment':
          values = Object.keys(formData[key]).filter((item) => formData[key][item]);
          // newParams[key] = values.length ? values : null; для мультивыбора
          newParams[key] = values.length === 1 ? paymentMatrix[values[0]] : null;

          selectedCount += values.length;
          break;
        case 'format':
          values = Object.keys(formData[key]).filter((item) => formData[key][item]);
          // newParams[key] = values.length ? values : null; для мультивыбора
          newParams[key] = values.length === 1 ? values[0] : null;

          selectedCount += values.length;
          break;
        default:
          newParams[key] = null;
      }
    });

    onChange(newParams);
    setCountParams(selectedCount);
  };

  const resetForm = () => {
    reset({ place: '', format: false });
    setCountParams(0);
    onChange(initialState);
  };

  const rules = {
    onChange: () => {
      handleSubmit(onSubmit)();
    },
  };

  return (
    <FFWrapper>
      <FF className={mobileState ? 'open' : ''}>
        {!!countParams && (
          <FFSection>
            <ColFlex>
              <FFSectionTxt>{countParams} параметров поиска</FFSectionTxt>
              <FFSectionTxtButton onClick={resetForm}>Сбросить фильтр === </FFSectionTxtButton>
            </ColFlex>
          </FFSection>
        )}
        <FFSection>
          <Controller
            rules={rules}
            control={control}
            name="place"
            render={({ field }) => {
              let options = filterParams?.place?.map(({ name }) => ({ value: name, label: name }));
              if (options) options = [{ value: '', label: 'Без разницы' }, ...options];

              return <Select {...field} options={options} placeholder="Где?" />;
            }}
          />
        </FFSection>
        <FFSection>
          {filterParams?.format
            ?.map((item, i) => ({ ...item, id: i }))
            .map((item) => {
              return (
                <Controller
                  key={item.id}
                  rules={rules}
                  control={control}
                  name={`format.${item.name}`}
                  render={({ field }) => (
                    // eslint-disable-next-line no-underscore-dangle
                    <FormCheckField {...field} label={filterMatrix[item.name]} count={item._count} />
                  )}
                />
              );
            })}
        </FFSection>
        <FFSection>
          {filterParams?.payment
            ?.map((item, i) => ({ ...item, id: i }))
            .map((item) => {
              return (
                <Controller
                  key={item.id}
                  rules={rules}
                  control={control}
                  name={`payment.${item.name}`}
                  render={({ field }) => (
                    // eslint-disable-next-line no-underscore-dangle
                    <FormCheckField {...field} label={filterMatrix[item.name]} count={item._count} />
                  )}
                />
              );
            })}
        </FFSection>
        <FFSection>
          {!!Object.keys(filterParams.groups || {}).length &&
            Object.entries(filterParams.groups)?.map(([key, data]) => {
              return (
                <Controller
                  key={key}
                  rules={rules}
                  control={control}
                  name={`group.${key}`}
                  render={({ field }) => <FormCategoryCheckField {...field} label={key} count={data._count} description={data.types.join(', ')} />}
                />
              );
            })}
        </FFSection>
      </FF>
    </FFWrapper>
  );
}
