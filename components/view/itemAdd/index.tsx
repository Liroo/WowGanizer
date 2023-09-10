import UIFormInputButton from '@/components/ui/form/input/button';
import UIFormInputText from '@/components/ui/form/input/text';
import UIFormInputTextSuggestions from '@/components/ui/form/input/textSuggestions';
import UILoadingThreeDot from '@/components/ui/loading/threeDot';
import { useAppDispatch, useAppSelector } from '@/flux/hooks';
import { createItem } from '@/flux/item/action';
import { selectStatusByActionTypeId } from '@/flux/status/selector';
import StatusEnum from '@/types/status';
import {
  ItemClassTypeEnum,
  ItemInventoryTypeEnum,
  ItemSourceEnum,
  ItemType,
  ItemTypeStatDetail,
  StatEnum,
} from '@/types/wow/item';
import ChevronSvg from 'icons/chevron.svg';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  id: string;
  wowheadUrl: string;
  patch: string;
  class: string;
  inventoryType: string;
  stats1Type: string;
  stats1Value: string;
  stats2Type: string;
  stats2Value: string;
  stats3Type: string;
  stats3Value: string;
  stats4Type: string;
  stats4Value: string;
  description: string;
  sourceType: string;
  sourceTitle: string;
  sourceDescription: string;
};

export default function ViewItemAdd() {
  const [open, setOpen] = useState<boolean>(false);
  const { status: createItemStatus } = useAppSelector(
    selectStatusByActionTypeId(createItem.typePrefix),
  );
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      id: '',
      wowheadUrl: '',
      patch: '',
      class: '',
      inventoryType: '',
      stats1Type: '',
      stats1Value: '',
      stats2Type: '',
      stats2Value: '',
      stats3Type: '',
      stats3Value: '',
      stats4Type: '',
      stats4Value: '',
      description: '',
      sourceType: '',
      sourceTitle: '',
      sourceDescription: '',
    },
  });
  const wowheadUrl = watch('wowheadUrl');
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const item: ItemType = {
      id: data.id,
      wowheadUrl: data.wowheadUrl,
      patch: data.patch,
      class: data.class as ItemClassTypeEnum,
      inventoryType: data.inventoryType as ItemInventoryTypeEnum,
      stats: [
        data.stats1Type as StatEnum,
        data.stats2Type as StatEnum,
        data.stats3Type as StatEnum,
        data.stats4Type as StatEnum,
      ].filter((stat) => stat),
      statsDetails: [
        {
          type: data.stats1Type,
          value: parseInt(data.stats1Value),
        } as ItemTypeStatDetail,
        {
          type: data.stats2Type,
          value: parseInt(data.stats2Value),
        } as ItemTypeStatDetail,
        {
          type: data.stats3Type,
          value: parseInt(data.stats3Value),
        } as ItemTypeStatDetail,
        {
          type: data.stats4Type,
          value: parseInt(data.stats4Value),
        } as ItemTypeStatDetail,
      ].filter((stat) => stat.type),
      description: data.description,
      sourceType: data.sourceType as ItemSourceEnum,
      source: {
        title: data.sourceTitle,
        description: data.sourceDescription,
      },
    };
    try {
      await dispatch(createItem(item)).unwrap();
      reset();
    } catch (_) {}
  };

  useEffect(() => {
    if (wowheadUrl) {
      (window as any).$WowheadPower.refreshLinks();
    }
  }, [wowheadUrl]);

  const isLoading = createItemStatus === StatusEnum.Pending;

  return (
    <div className="border-b border-t border-primary border-opacity-10 py-[16px]">
      <div
        className="flex cursor-pointer select-none px-[16px]"
        onClick={() => setOpen(!open)}
      >
        <ChevronSvg
          className="w-[14px] fill-current"
          style={{
            transform: open ? 'rotate(0deg)' : 'rotate(-90deg)',
          }}
        />
        <p className="ml-[6px] text-[18px] font-medium">Add Item</p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`px-[16px] ${open ? '' : 'hidden'}`}
      >
        <div className="py-[16px]">
          <p className="whitespace-nowrap text-[16px] font-semibold text-primary text-opacity-80">
            Info
          </p>
          <div className="flex w-full">
            <div className="flex flex-col">
              <p className="whitespace-nowrap text-[12px] font-semibold text-primary text-opacity-50">
                id
              </p>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <UIFormInputText
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="207800"
                    className={`mt-0 w-[100px] ${
                      errors.id ? 'border-[#eb5757]' : ''
                    }`}
                    disabled={isLoading}
                  />
                )}
                name="id"
              />
            </div>
            <div className="ml-[8px]">
              <p className="whitespace-nowrap text-[12px] font-semibold text-primary text-opacity-50">
                Patch
              </p>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <UIFormInputText
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="10.2"
                    className={`mt-0 w-[200px] ${
                      errors.patch ? 'border-[#eb5757]' : ''
                    }`}
                    disabled={isLoading}
                  />
                )}
                name="patch"
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <p className="whitespace-nowrap text-[12px] font-semibold text-primary text-opacity-50">
                Wowhead Url
              </p>
              <Controller
                control={control}
                rules={{
                  required: true,
                  pattern: {
                    value:
                      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
                    message: 'Invalid url',
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <UIFormInputText
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="https://ptr-2.wowhead.com/item=207800"
                    className={`mt-0 w-[300px] ${
                      errors.wowheadUrl ? 'border-[#eb5757]' : ''
                    }`}
                    disabled={isLoading}
                  />
                )}
                name="wowheadUrl"
              />
            </div>
            <div className="ml-[16px] flex items-end justify-start py-[8px]">
              <a target="_blank" href={wowheadUrl}></a>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col">
              <p className="whitespace-nowrap text-[12px] font-semibold text-primary text-opacity-50">
                Source Type
              </p>
              <Controller
                control={control}
                rules={{
                  required: true,
                  validate: (value) => {
                    return Object.keys(ItemSourceEnum).includes(value);
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <UIFormInputTextSuggestions
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="Raid"
                    className={`mt-0 w-[200px] ${
                      errors.sourceType ? 'border-[#eb5757]' : ''
                    }`}
                    suggestions={Object.keys(ItemSourceEnum)}
                    disabled={isLoading}
                  />
                )}
                name="sourceType"
              />
            </div>
            <div className="ml-[8px]">
              <p className="whitespace-nowrap text-[12px] font-semibold text-primary text-opacity-50">
                Source Title
              </p>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <UIFormInputText
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="Title"
                    className={`mt-0 w-[200px] ${
                      errors.sourceTitle ? 'border-[#eb5757]' : ''
                    }`}
                    disabled={isLoading}
                  />
                )}
                name="sourceTitle"
              />
            </div>
            <div className="ml-[8px]">
              <p className="whitespace-nowrap text-[12px] font-semibold text-primary text-opacity-50">
                Source Description
              </p>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <UIFormInputText
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="Description"
                    className={`mt-0 w-[200px] ${
                      errors.sourceDescription ? 'border-[#eb5757]' : ''
                    }`}
                    disabled={isLoading}
                  />
                )}
                name="sourceDescription"
              />
            </div>
          </div>

          <p className="mt-[8px] whitespace-nowrap text-[16px] font-semibold text-primary text-opacity-80">
            Type
          </p>
          <div className="flex w-full">
            <div className="flex flex-col">
              <p className="whitespace-nowrap text-[12px] font-semibold text-primary text-opacity-50">
                Inventory
              </p>
              <Controller
                control={control}
                rules={{
                  required: true,
                  validate: (value) => {
                    return Object.keys(ItemInventoryTypeEnum).includes(value);
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <UIFormInputTextSuggestions
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="Head"
                    className={`mt-0 w-[200px] ${
                      errors.inventoryType ? 'border-[#eb5757]' : ''
                    }`}
                    suggestions={Object.keys(ItemInventoryTypeEnum)}
                    disabled={isLoading}
                  />
                )}
                name="inventoryType"
              />
            </div>
            <div className="ml-[8px]">
              <p className="whitespace-nowrap text-[12px] font-semibold text-primary text-opacity-50">
                Class
              </p>
              <Controller
                control={control}
                rules={{
                  required: true,
                  validate: (value) => {
                    return Object.keys(ItemClassTypeEnum).includes(value);
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <UIFormInputTextSuggestions
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="Cloth"
                    className={`mt-0 w-[200px] ${
                      errors.class ? 'border-[#eb5757]' : ''
                    }`}
                    suggestions={Object.keys(ItemClassTypeEnum)}
                    disabled={isLoading}
                  />
                )}
                name="class"
              />
            </div>
          </div>

          <p className="mt-[8px] whitespace-nowrap text-[16px] font-semibold text-primary text-opacity-80">
            Stats
          </p>
          <div className="flex w-full">
            <div className="flex flex-col">
              <p className="whitespace-nowrap text-[12px] font-semibold text-primary text-opacity-50">
                Type
              </p>
              <Controller
                control={control}
                rules={{
                  required: true,
                  validate: (value) => {
                    return Object.keys(StatEnum).includes(value);
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <UIFormInputTextSuggestions
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="Intellect"
                    className={`mt-0 w-[200px] ${
                      errors.stats1Type ? 'border-[#eb5757]' : ''
                    }`}
                    suggestions={Object.keys(StatEnum)}
                    disabled={isLoading}
                  />
                )}
                name="stats1Type"
              />
            </div>
            <div className="ml-[8px]">
              <p className="whitespace-nowrap text-[12px] font-semibold text-primary text-opacity-50">
                Value
              </p>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <UIFormInputText
                    type="number"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="1820"
                    className={`mt-0 w-[200px] ${
                      errors.stats1Value ? 'border-[#eb5757]' : ''
                    }`}
                    disabled={isLoading}
                  />
                )}
                name="stats1Value"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col">
              <Controller
                control={control}
                rules={{
                  required: true,
                  validate: (value) => {
                    return Object.keys(StatEnum).includes(value);
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <UIFormInputTextSuggestions
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="Mastery"
                    className={`mt-0 w-[200px] ${
                      errors.stats2Type ? 'border-[#eb5757]' : ''
                    }`}
                    suggestions={Object.keys(StatEnum)}
                    disabled={isLoading}
                  />
                )}
                name="stats2Type"
              />
            </div>
            <div className="ml-[8px]">
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <UIFormInputText
                    type="number"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="526"
                    className={`mt-0 w-[200px] ${
                      errors.stats2Value ? 'border-[#eb5757]' : ''
                    }`}
                    disabled={isLoading}
                  />
                )}
                name="stats2Value"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col">
              <Controller
                control={control}
                rules={{
                  validate: (value) => {
                    return !value || Object.keys(StatEnum).includes(value);
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <UIFormInputTextSuggestions
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="Haste"
                    className={`mt-0 w-[200px] ${
                      errors.stats3Type ? 'border-[#eb5757]' : ''
                    }`}
                    suggestions={Object.keys(StatEnum)}
                    disabled={isLoading}
                  />
                )}
                name="stats3Type"
              />
            </div>
            <div className="ml-[8px]">
              <Controller
                control={control}
                rules={{}}
                render={({ field: { onChange, onBlur, value } }) => (
                  <UIFormInputText
                    type="number"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="342"
                    className={`mt-0 w-[200px] ${
                      errors.stats3Value ? 'border-[#eb5757]' : ''
                    }`}
                    disabled={isLoading}
                  />
                )}
                name="stats3Value"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col">
              <Controller
                control={control}
                rules={{
                  validate: (value) => {
                    return !value || Object.keys(StatEnum).includes(value);
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <UIFormInputTextSuggestions
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="Haste"
                    className={`mt-0 w-[200px] ${
                      errors.stats4Type ? 'border-[#eb5757]' : ''
                    }`}
                    suggestions={Object.keys(StatEnum)}
                    disabled={isLoading}
                  />
                )}
                name="stats4Type"
              />
            </div>
            <div className="ml-[8px]">
              <Controller
                control={control}
                rules={{}}
                render={({ field: { onChange, onBlur, value } }) => (
                  <UIFormInputText
                    type="number"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="342"
                    className={`mt-0 w-[200px] ${
                      errors.stats4Value ? 'border-[#eb5757]' : ''
                    }`}
                    disabled={isLoading}
                  />
                )}
                name="stats4Value"
              />
            </div>
          </div>
          <Controller
            control={control}
            rules={{}}
            render={({ field: { onChange, onBlur, value } }) => (
              <UIFormInputText
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                placeholder="Description"
                className={`mt-0 w-[408px] ${
                  errors.description ? 'border-[#eb5757]' : ''
                }`}
                disabled={isLoading}
              />
            )}
            name="description"
          />
        </div>

        <UIFormInputButton
          type="submit"
          className="w-[200px] bg-[#2383e2] font-semibold text-white"
          disabled={isLoading}
        >
          {isLoading ? <UILoadingThreeDot /> : 'Add item'}
        </UIFormInputButton>
      </form>
    </div>
  );
}
